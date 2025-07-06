import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";
import { sendContactEmail, sendContactEmailMock } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {

  // Add CORS headers for video streaming
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Range');
    next();
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('=== CONTACT FORM SUBMITTED ===');
      console.log('Request body:', req.body);
      
      const contactData = insertContactSchema.parse(req.body);
      console.log('Parsed contact data:', contactData);
      
      const contact = await storage.createContact(contactData);
      console.log('Contact created:', contact);
      
      // Send email notification
      console.log('About to call sendContactEmail...');
      const emailSent = await sendContactEmail(contact); // Now using real email sending
      
      res.json({ 
        success: true, 
        contact,
        emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid form data",
          details: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit contact form" 
      });
    }
  });

  // Get all contacts (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch contacts" 
      });
    }
  });

  // Handle video streaming with proper headers
  app.get("/videos/*", (req, res) => {
    const videoPath = path.join(process.cwd(), "client", "public", req.path);
    
    if (!fs.existsSync(videoPath)) {
      return res.status(404).json({ error: "Video not found" });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(videoPath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
