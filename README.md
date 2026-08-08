

# Zhimin Zhao's Academic Portfolio

A personal research and professional portfolio website for Zhimin Zhao, built with Vue 3 and Vite. The site showcases publications, open-source projects, books, teaching experience, and professional background at the intersection of AI and Software Engineering. Hosted on GitHub Pages with automated CI/CD.

## 🛠️ Tech Stack
- **Framework:** Vue 3
- **Build Tool:** Vite 6
- **Styling:** Custom CSS (responsive)
- **Deployment:** GitHub Pages via GitHub Actions

## 📦 Installation & Usage

### Prerequisites
- Node.js `v20` or later
- npm or pnpm

### Local Setup
```bash
# Clone the repository
git clone https://github.com/zhimin-z/zhimin-z.github.io.git
cd zhimin-z.github.io

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Opens a local development server (typically at `http://localhost:5173`) with hot module replacement.

### Production Build
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Locally serves the production build to verify optimizations before deployment.

## 🚀 Deployment
This repository uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically deploy to GitHub Pages.
- **Trigger:** Pushes or manual dispatches to the `main` branch.
- **Steps:** Checks out code, sets up Node.js `v20`, installs dependencies, builds with Vite, creates a `.nojekyll` file for compatibility, and publishes the `dist/` artifact.
- **Base Path:** Dynamically configured via `process.env.BASE_PATH` to handle GitHub Pages subdirectory routing.

## 📂 Key Files & Architecture
- `src/App.vue` – Main application layout, navigation, and section rendering
- `src/data/profileData.js` – Centralized data module for publications, projects, books, teaching, experience, and contact links
- `src/style.css` – Global typography, layout, and responsive breakpoints
- `vite.config.js` – Vite configuration with Vue plugin and dynamic base path support
- `package.json` – Project metadata, dependencies, and npm scripts
