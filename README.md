# Skip Hire Application

A modern, responsive skip hire service application built with React, TypeScript, and HeroUI. This application allows users to search for their address, select appropriate skip sizes, and book skip hire services.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)

## Features

- **Address Search**: Geocoded address lookup with autocomplete functionality
- **Skip Selection**: Interactive grid of skip options with filtering capabilities
- **Visual Step Indicator**: Clear progression through the booking process
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices
- **Accessibility**: ARIA-compliant components for screen readers and keyboard navigation

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **UI Components**: HeroUI component library
- **Styling**: Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React Hooks for component and application state

## Project Structure

The project follows a feature-based organization pattern with clearly separated concerns:

```
src/
├── features/            # Feature-specific code organized by domain
│   ├── address-search/  # Address lookup functionality
│   ├── navigation/      # Navigation components (breadcrumbs, stepper)
│   ├── skips/           # Skip selection and display
│   └── ui/              # Shared UI components
├── components/          # Generic shared components
├── layouts/             # Page layout templates
├── pages/               # Route components
├── styles/              # Global styles
├── config/              # Configuration files
├── data/                # Data fetching utilities
├── types/               # TypeScript type definitions
└── App.tsx              # Application entry point
```

### Features Module Breakdown

Each feature module follows a consistent structure:

```
feature-name/
├── api.ts               # API calls related to the feature
├── types.ts             # TypeScript interfaces for the feature
├── index.ts             # Barrel exports for easier imports
└── components/          # Feature-specific React components
```

## Key Components

### Address Search

The address search functionality allows users to type their postcode or address and receive geocoded suggestions. It features:

- Real-time address lookup with API integration
- Dropdown results with location icons
- Keyboard navigation support
- Error handling for failed searches

### Skip Selection

The skip selection interface displays available skip options based on the user's location with:

- Responsive grid layout
- Visual representation of each skip size
- Size and waste type filtering
- Price calculation including VAT
- Selection indicators

### Navigation Components

To guide users through the booking process:

- **Breadcrumbs**: Shows overall progress through the application
- **Stepper**: Visual indicator of the current step with custom icons
- **Selection Banner**: Displays the currently selected skip with pricing and actions

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rem_challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Development Workflow

### Adding a New Feature

1. Create a new directory under `src/features/`
2. Add necessary files (api.ts, types.ts, etc.)
3. Create components within the feature's components directory
4. Export via an index.ts barrel file

### Component Development

Components follow a consistent pattern:
- TypeScript interfaces for props
- React functional components with hooks
- Clear separation of UI and logic

### Styling Approach

- Use Tailwind utility classes for component-specific styling
- Leverage HeroUI theme variables for consistent colors and spacing
- Ensure responsive design with mobile-first approach

## Deployment

The application is configured for deployment on Vercel with automatic previews for branches and production deployment from main.

### Alternative Deployment Options

#### Firebase Hosting

Firebase offers easy hosting for web applications with global CDN capabilities.

**Basic Setup:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize project
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy --only hosting
```

**Advanced Configuration:**
- Custom caching rules via firebase.json
- Multiple environments using Firebase targets
- Preview channels for feature branches

#### Docker with VPS Deployment

For complete control over the hosting environment, Docker containerization allows deployment to any VPS.

**Dockerfile:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Deployment Steps:**
1. Build the Docker image: `docker build -t skip-hire-app .`
2. Run the container: `docker run -d -p 80:80 --name skip-hire skip-hire-app`

**Docker Compose Setup:**
```yaml
version: '3'

services:
  skip-hire:
    build: .
    ports:
      - "80:80"
    restart: always
    volumes:
      - ./logs:/var/log/nginx
    environment:
      - NODE_ENV=production

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 30
```

### Deployment Comparison

| Feature | Vercel | Firebase | Docker/VPS |
|---------|--------|----------|------------|
| Setup Complexity | Low | Medium | High |
| Cost | Free tier available | Free tier available | Pay for VPS |
| Control | Limited | Medium | Complete |
| Scalability | Automatic | Automatic | Manual/Custom |
| CDN | Built-in | Built-in | Manual setup |
| Custom Domain | Yes | Yes | Yes |
| Server-side Logic | Serverless functions | Cloud Functions | Full backend possible |

---

## License

[MIT](LICENSE)
