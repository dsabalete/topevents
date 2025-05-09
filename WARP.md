# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is "Tercer Espai" - a Nuxt 3 website for a community space in Barcelona that showcases video and graphic art events. It displays information about various cultural spaces, their schedules, and event posters, with a contact form and newsletter signup.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Tailwind CSS, Pinia (state management), Supabase (database), MongoDB (legacy), Netlify (hosting)

## Development Commands

### Core Development
```bash
# Install dependencies (project uses bun)
bun install

# Start development server (localhost:3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Generate static site
bun run generate

# Clean Nuxt cache
bun run clean

# Reset dependencies completely
bun run reset
```

### Netlify Development
```bash
# Run with Netlify dev server
bun run netlify:dev

# Deploy to Netlify
netlify deploy --prod
```

## Architecture Overview

### Data Layer
- **Supabase**: Primary database with tables `events` and `espais`
- **MongoDB**: Legacy database connection (see `.env.example`)
- **Pinia Stores**: Centralized state management for events, espais, and filters

### State Management Pattern
The application uses a composables + stores pattern:
- **Composables** (`composables/supabase-*.ts`): Handle data fetching and API calls
- **Stores** (`stores/*.ts`): Manage application state with reactive computed properties
- **Types** (`types/*.ts`): TypeScript interfaces for data models

### Key Data Models
- `PosterEvent`: Event posters with name, image, link, and archived status
- `Espai`: Cultural spaces with name, address, timetable, phone, and picture

### Component Architecture
- **Pages** (`pages/*.vue`): File-based routing with .vue pages
- **Components** (`components/*.vue`): Reusable UI components (cards, inputs, navigation)
- **Layout** (`layouts/default.vue`): Shared layout wrapper
- **App** (`app.vue`): Root component with page transitions

### Styling System
- **Tailwind CSS**: Utility-first styling with custom configuration
- **Custom Extensions**: Custom font sizes (xxs: 10px) and Courier Prime mono font
- **Page Transitions**: Global blur-fade transitions between routes

### Environment Configuration
Required environment variables:
- `SUPABASE_KEY`: Supabase anonymous key
- `SUPABASE_URL`: Supabase project URL
- `MONGODB_URI`: MongoDB connection string (legacy)

### Key Application Features
1. **Event Management**: Display and filter event posters, with archive functionality
2. **Spaces Directory**: Information about cultural spaces (espais) 
3. **Search & Filter**: Real-time filtering of events by name
4. **Contact Forms**: Contact form and mailing list signup
5. **Responsive Design**: Full responsive layout with video background on homepage

### Deployment
- **Platform**: Netlify with automatic deployment
- **Build Command**: `bun run build`
- **Publish Directory**: `dist`
- **Development Port**: 3000 (Netlify dev: 8888)

### Database Schema Notes
- Events table: Focus on `archived` boolean field for filtering published/archived content
- Espais table: Contains venue information for cultural spaces
- All data fetching is handled through Supabase composables with error handling