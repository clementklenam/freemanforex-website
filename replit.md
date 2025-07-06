# FreemanForex - Trading Platform

## Overview

FreemanForex is a modern one-page scrollable web application for forex and gold trading mentorship and services. The platform features a full-screen hero section with background image overlay, smooth scrolling navigation between sections (About, Services, Mentorship, Contact), and comprehensive trading education content. Built with React frontend and Node.js/Express backend.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom trading-themed color scheme
- **State Management**: React Query (@tanstack/react-query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Session Storage**: PostgreSQL-backed sessions (connect-pg-simple)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Development server setup
├── shared/           # Shared TypeScript types and schemas
└── migrations/       # Database migrations
```

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions with timestamps
- **Schema Validation**: Zod schemas for type safety and validation

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)

### Storage Layer
- **Interface**: IStorage defines data access methods
- **Implementation**: MemStorage for in-memory development (ready for PostgreSQL)
- **Database Integration**: Configured for PostgreSQL with Drizzle ORM

### UI Components
- **Navigation**: Fixed navigation with smooth scroll to sections
- **Hero Section**: Full-screen background image with overlay and CTA buttons
- **Sections**: Integrated About, Services, Mentorship, Trading Vlogs, and Contact sections
- **Video Gallery**: Trading vlogs section with embedded video player and responsive grid
- **Floating Social**: Animated social media buttons for Telegram, Instagram, Facebook
- **Forms**: Contact form with validation and error handling
- **Theme**: Trading-focused color scheme (gold and deep navy)
- **Layout**: Single-page scrollable design with section-based navigation

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **API Layer**: Express routes handle HTTP requests and validation
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores persistent data
5. **Response**: JSON responses sent back to client
6. **UI Updates**: React Query manages cache and UI updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18+ with TypeScript
- **Component Library**: Radix UI for accessible components
- **Styling**: Tailwind CSS with PostCSS
- **Form Management**: React Hook Form with Zod resolvers
- **HTTP Client**: Native fetch with React Query wrapper

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session Store**: PostgreSQL-backed session storage

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Strict mode configuration
- **Development**: Hot module replacement and error overlay
- **Database Tools**: Drizzle Kit for schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite bundles React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations run via `npm run db:push`

### Environment Requirements
- **Node.js**: ES modules support
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **Production**: Serves static files and API from single Express server

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Apply database schema changes

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Updated website with user-provided images - replaced placeholder images with actual FreemanForex branding images
- July 05, 2025. Transformed into one-page scrollable website with full-screen hero section, background image overlay, smooth navigation between sections, and comprehensive detailed content
- July 05, 2025. Integrated user logo throughout website with proper cropping and responsive design
- July 05, 2025. Added floating social media buttons (Telegram, Instagram, Facebook) with smooth animations
- July 05, 2025. Created comprehensive Trading Vlogs section with 7 embedded videos, responsive grid layout, and call-to-action
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```