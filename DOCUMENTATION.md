# Axion Enterprise Platform

A high-performance, enterprise-grade service platform built with modern web technologies. This platform mirrors the professional "Digital Architect" aesthetic with a focus on learning design, technology solutions, strategic consulting, and web/app development services.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting the Code](#getting-the-code)
3. [Local Setup](#local-setup)
4. [Project Structure](#project-structure)
5. [Available Scripts](#available-scripts)
6. [Architecture Overview](#architecture-overview)
7. [Making Changes](#making-changes)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

### Required Software

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed: Open terminal/command prompt and type:
     ```bash
     node --version
     ```
   - Should show something like `v20.x.x`

2. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/downloads
   - To check if installed:
     ```bash
     git --version
     ```
   - Should show something like `git version 2.x.x`

3. **A Code Editor** (we recommend VS Code)
   - Download from: https://code.visualstudio.com/

4. **Package Manager** - Choose one:
   - **npm** (comes with Node.js) - Default choice
   - **yarn** - Faster alternative
   - **bun** - Fastest option (requires separate installation)

---

## Getting the Code

### Option 1: Via GitHub (Recommended)

The project is connected to GitHub. Here's how to get it:

#### Step 1: Connect to GitHub in Lovable
1. In the Lovable editor, click **Connectors** in the left sidebar
2. Click **GitHub**
3. Click **Connect project**
4. Authorize the Lovable GitHub App
5. Select your GitHub account/organization
6. Click **Create Repository**

#### Step 2: Clone the Repository Locally
Once connected, open your terminal/command prompt and run:

```bash
# Replace with your actual repository URL from GitHub
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Enter the project folder
cd YOUR_REPO_NAME
```

### Option 2: Direct Download (No GitHub)

If you don't want to use GitHub:

1. In the Lovable editor, click the **Code Editor** icon (top left)
2. Select all files in the file explorer
3. Copy each file manually
4. Create a new folder on your computer
5. Paste the files maintaining the folder structure

---

## Local Setup

### Step 1: Install Dependencies

Open your terminal/command prompt in the project folder and run:

```bash
# Using npm (default)
npm install

# OR using yarn
yarn install

# OR using bun (fastest)
bun install
```

This will download all required packages. It may take a few minutes.

**What you'll see:**
- Progress bars downloading packages
- A `node_modules` folder will be created (this is normal - don't modify it)
- A lock file may be created (package-lock.json, yarn.lock, or bun.lockb)

### Step 2: Start the Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev

# OR using bun
bun dev
```

**What you'll see:**
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 3: View the Project

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to: **http://localhost:8080/**
3. You should see the Axion website running!

**Note:** The page will automatically reload when you make changes to the code.

---

## Project Structure

Here's what each folder and file does:

```
axion-platform/
├── public/                    # Static files (images, fonts, etc.)
│   ├── placeholder.svg
│   └── robots.txt
├── src/                       # Main source code
│   ├── components/            # Reusable UI components
│   │   ├── site/             # Website-specific components
│   │   │   ├── Footer.tsx    # Website footer
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   ├── Hero.tsx      # Hero section
│   │   │   ├── LeadForm.tsx  # Contact form
│   │   │   ├── Services.tsx  # Services section
│   │   │   └── TrustSignals.tsx # Trust badges
│   │   └── ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       └── ... (other UI components)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Home page
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx               # Main app component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles & design tokens
│   ├── main.tsx              # App entry point
│   └── vite-env.d.ts         # TypeScript types
├── index.html                # HTML entry point
├── package.json              # Project dependencies & scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── README.md                 # This file
```

---

## Available Scripts

Run these commands in your terminal while in the project folder:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:8080) |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run tests |
| `npm run lint` | Check code for errors |

---

## Architecture Overview

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development & optimized builds)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Animation**: Framer Motion for smooth transitions
- **State Management**: React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Design System

The project uses a "Digital Architect" aesthetic with:

**Colors:**
- Primary: Deep Navy (#0F172A)
- Secondary: Slate (#1E293B)
- Accent: Bright Blue (#3B82F6)
- Success: Green (#10B981)
- Warning: Orange (#F59E0B)

**Typography:**
- Display Font: Space Grotesk (headings)
- Body Font: Inter (text)

**Spacing Scale:**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

---

## Making Changes

### Example: Changing the Hero Title

1. Open `src/components/site/Hero.tsx` in your code editor
2. Find the heading text:
   ```tsx
   <h1 className="...">
     Transform Your Digital Presence
   </h1>
   ```
3. Change the text to whatever you want
4. Save the file
5. The browser will automatically refresh!

### Example: Adding a New Service

1. Open `src/components/site/Services.tsx`
2. Find the `services` array at the top of the file
3. Add a new service object:
   ```tsx
   {
     title: "Your New Service",
     description: "Description here",
     icon: YourIcon,
     features: ["Feature 1", "Feature 2"]
   }
   ```
4. Save the file

### Example: Changing Colors

1. Open `src/index.css`
2. Find the `:root` section with CSS variables
3. Modify the color values:
   ```css
   :root {
     --primary: 221 83% 53%;  /* Change this HSL value */
   }
   ```
4. Save and see the changes instantly

---

## Deployment

### Deploy to Production

When you're ready to make your site live:

#### Option 1: Lovable Hosting (Easiest)
1. In the Lovable editor, click **Publish** (top right)
2. Click **Publish** in the dialog
3. Your site will be live at `https://your-project.lovable.app`

#### Option 2: Vercel (Recommended for custom domains)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up/login with GitHub
4. Click **Add New Project**
5. Import your repository
6. Click **Deploy**

#### Option 3: Netlify
1. Push your code to GitHub
2. Go to https://netlify.com
3. Drag and drop your `dist/` folder (after running `npm run build`)

---

## Troubleshooting

### Problem: "command not found: npm"
**Solution**: Node.js is not installed. Download and install from https://nodejs.org/

### Problem: "Cannot find module 'react'"
**Solution**: Dependencies aren't installed. Run `npm install`

### Problem: Port 8080 is already in use
**Solution**: 
```bash
# Kill the process using port 8080
# On Mac/Linux:
lsof -ti:8080 | xargs kill -9

# On Windows (PowerShell as Admin):
netstat -ano | findstr :8080
taskkill /PID <PID_NUMBER> /F
```

### Problem: Changes not showing in browser
**Solution**:
1. Check the terminal for errors
2. Try hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
3. Restart the dev server: Press `Ctrl+C` in terminal, then run `npm run dev` again

### Problem: GitHub connection issues
**Solution**: 
1. Make sure you authorized the Lovable GitHub App
2. Check that you have write access to the repository
3. Try disconnecting and reconnecting in Lovable

---

## Getting Help

- **Lovable Documentation**: https://docs.lovable.dev/
- **React Documentation**: https://react.dev/
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **shadcn/ui Components**: https://ui.shadcn.com/

---

## Next Steps

Now that you have the project running locally, you can:

1. **Customize the Content**: Update text, images, and services in the component files
2. **Add New Pages**: Create new files in `src/pages/` and add routes in `App.tsx`
3. **Connect a Backend**: Enable Lovable Cloud for database and authentication
4. **Add Payments**: Integrate payment processing
5. **Deploy**: Make your site live for the world to see!

---

**Happy Coding! 🚀**
