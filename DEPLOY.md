# Deployment Instructions for Vijay Electronics Website

## GitHub Pages Deployment

1. **Push Code to GitHub:**
   - Initialize git: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Create a repository on GitHub (e.g., `Cp-plus-cctv-installation-unnao-near-me`).
   - Add remote: `git remote add origin https://github.com/USERNAME/REPO_NAME.git`
   - Push: `git push -u origin main`

2. **Configure GitHub Pages:**
   - Go to Repository Settings > Pages.
   - Source: `GitHub Actions` (Recommended) or `Deploy from a branch`.
   - If using `Deploy from a branch`, you might need to build first and push the `dist` folder, OR use a workflow.

   **Easier Method (using gh-pages):**
   - Run in terminal: `npm install gh-pages --save-dev`
   - Add to `package.json` scripts:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
     ```
   - Run: `npm run deploy`

3. **Vite Configuration:**
   - I have already set `base: './'` in `vite.config.js`. This ensures the site works on any subpath (e.g., `github.io/repo-name/`).

4. **Images:**
   - All images are in `public/img`. They are referenced as `/img/filename.png` or `./img/filename.png`. This works with `base: './'`.

## Local Development
- Run `npm run dev` to start the local server.
- Open `http://localhost:5173`.
