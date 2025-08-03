# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application for creating and sharing Christmas wish lists. It uses TypeScript, Tailwind CSS v4, and Clerk for authentication.

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Check TypeScript types

## Architecture
The application follows Next.js App Router structure:

### Core Components
- **app/layout.tsx** - Root layout with ClerkProvider for authentication
- **middleware.ts** - Clerk middleware for route protection
- **app/entities/** - TypeScript type definitions for data models:
  - `WorldSpace` - Container for a user's wish list environment
  - `Person` - Individual person within a world space
  - `Milestone` - Wish list items linked to people

### Data Model Relationships
- WorldSpace belongs to a user (via `user_id`)
- Person belongs to a WorldSpace (via `world_space_id`)
- Milestone belongs to a Person (via `people_id`)

### Key Dependencies
- **@clerk/nextjs** - Authentication and user management
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - UI library
- **Tailwind CSS v4** - Styling (using PostCSS configuration)

### Path Aliases
- `@/*` maps to the root directory (configured in tsconfig.json)