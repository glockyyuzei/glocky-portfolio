# Glocky Yuzei Portfolio

A single-page developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Running it in VS Code

**Requirements:** [Node.js](https://nodejs.org) 20 or newer.

1. Unzip this folder and open it in VS Code (`code .` from the folder, or File → Open Folder).
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## Other commands

- `npm run build` — build a production bundle into `dist/`
- `npm run serve` — preview the production build locally
- `npm run typecheck` — check TypeScript types

## Project structure

- `src/pages/home.tsx` — page composition (loading screen + all sections)
- `src/components/portfolio/` — each section of the site (Hero, About, Skills, Projects, Experience, Contact, Footer)
- `src/components/ui/` — reusable UI primitives (buttons, cards, badges, etc.)
- `src/index.css` — theme tokens and global styles

## Editing content

Most of the copy (name, titles, stats, skills, projects, timeline, links) lives directly in the section components under `src/components/portfolio/`. Edit the text/arrays there and the dev server will hot-reload.
