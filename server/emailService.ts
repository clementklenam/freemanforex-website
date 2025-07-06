import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';
import type { Contact } from '@shared/schema';

// Initialize SendGrid with API key from environment variable
const sendGridApiKey = process.env.SENDGRID_API_KEY;
if (sendGridApiKey) {
  sgMail.setApiKey(sendGridApiKey);
}

// Create a transporter using Gmail SMTP (fallback)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function sendContactEmail(contact: Contact): Promise<boolean> {
  console.log('=== EMAIL SERVICE CALLED ===');
  console.log('Contact received:', contact);
  // Try SendGrid first (recommended) - only if API key is available
  if (sendGridApiKey) {
    console.log('Attempting to send email via SendGrid...');
    console.log('Contact details:', { name: contact.name, email: contact.email });
    try {
    const msg = {
      to: ['klenam17@gmail.com'], // Testing with just your email first
      from: 'info@freemanforex.com', // Using your custom domain email
      subject: `New Contact Form Submission from ${contact.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #f6ad55; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Name:</strong>
              <span style="color: #2d3748; margin-left: 10px;">${contact.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Email:</strong>
              <span style="color: #2d3748; margin-left: 10px;">
                <a href="mailto:${contact.email}" style="color: #3182ce;">${contact.email}</a>
              </span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Message:</strong>
              <div style="color: #2d3748; margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; border-left: 4px solid #f6ad55;">
                ${contact.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
              <small style="color: #718096;">
                Submitted on: ${contact.createdAt.toLocaleString()}<br>
                Contact ID: ${contact.id}
              </small>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f6ad55; border-radius: 8px;">
            <p style="color: #1a365d; margin: 0; font-weight: bold;">
              FreemanForex Trading - Contact Form Notification
            </p>
          </div>
        </div>
      `
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid:', response[0].statusCode);
    console.log('SendGrid Response Details:', JSON.stringify(response, null, 2));
    return true;
  } catch (error) {
    console.error('SendGrid failed, trying Gmail fallback:', error);
    console.error('SendGrid Error Details:', JSON.stringify(error, null, 2));
  }
  }

  // Fallback to Gmail SMTP
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'freemanforex01@gmail.com',
      subject: `New Contact Form Submission from ${contact.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #f6ad55; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Name:</strong>
              <span style="color: #2d3748; margin-left: 10px;">${contact.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Email:</strong>
              <span style="color: #2d3748; margin-left: 10px;">
                <a href="mailto:${contact.email}" style="color: #3182ce;">${contact.email}</a>
              </span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #4a5568;">Message:</strong>
              <div style="color: #2d3748; margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; border-left: 4px solid #f6ad55;">
                ${contact.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
              <small style="color: #718096;">
                Submitted on: ${contact.createdAt.toLocaleString()}<br>
                Contact ID: ${contact.id}
              </small>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f6ad55; border-radius: 8px;">
            <p style="color: #1a365d; margin: 0; font-weight: bold;">
              FreemanForex Trading - Contact Form Notification
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Gmail:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// For development/testing without email credentials
export async function sendContactEmailMock(contact: Contact): Promise<boolean> {
  console.log('=== MOCK EMAIL SENT ===');
  console.log('To: freemanforex01@gmail.com');
  console.log('Subject: New Contact Form Submission from', contact.name);
  console.log('From:', contact.email);
  console.log('Message:', contact.message);
  console.log('=======================');
  return true;
} 