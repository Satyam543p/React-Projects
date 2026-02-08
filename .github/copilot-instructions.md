<!-- Copilot / AI agent instructions tailored for this repository -->
# Repo summary

This repository is a collection of small, self-contained Vite + React sample apps (numbered folders like `01vitereact`, `03counter`, etc.). Each folder is an independent project with its own `package.json`, `vite.config.js`, and `src/` entry points.

# Primary goals for an AI coding agent
- Quickly locate the target project (top-level numbered folders) and operate within that folder only.
- Preserve cross-project isolation — avoid editing files across multiple project folders in a single change unless the user explicitly requests it.

# Quick start (how to run a project)
1. Change directory into the target project, e.g. `cd 01vitereact`.
2. Install dependencies: `npm install` (or `pnpm`/`yarn` if preferred — check `package.json`).
3. Run dev server: `npm run dev` (scripts are typically `dev`, `build`, `preview`, `lint`).
Default dev server port: `5173` (Vite).

# Architecture & conventions (what to read first)
- Each project is a minimal Vite React app with these common files:
  - `package.json` — scripts and deps
  - `vite.config.js` — bundler config
  - `index.html` — app host
  - `src/main.jsx` — app bootstrap
  - `src/App.jsx` and `src/index.css` / `App.css` — primary component and styles
  - `assets/` or `public/` — static assets
- State patterns used in examples:
  - Local state & effects: `useState`, `useEffect`, `useRef`, `useCallback` (see `05passwordGenerator` and `03counter`).
  - Context API: `08miniContext`, `09themeChanger`, `10todoContextLocal` (global state via `createContext`/`useContext`).
  - Redux Toolkit: `11todoReduxToolkit` uses `configureStore`, `createSlice` and `features/` for slices.
  - Custom hooks and components: `06currencyConverter/hooks` and `06currencyConverter/components/InputBox.jsx` demonstrate reusable hooks and input components.

# Integration points / external deps to be aware of
- `12megaBlogAppwrite` contains an `appwrite/` folder and a `store/` — inspect these for backend integration patterns and secrets handling.
- Many projects rely only on npm packages declared in each project's `package.json` (React 19, Vite, ESLint, Tailwind in some projects). Always inspect the project's `package.json` before making dependency changes.

# Editing guidelines (project-specific)
- When making changes, confine edits to the target project directory unless the task explicitly spans multiple projects.
- Do not change shared tooling (e.g., global GitHub workflows) because this repository is a collection of demos rather than a single app.
- Preserve `index.html` and `vite.config.js` patterns unless fixing a bug — these are intentionally minimal in each sample.

# Common tasks & examples
- Add a component: create under `PROJECT/src/components/`, import in `PROJECT/src/App.jsx` or in the route component.
- Run lint for a project: `cd PROJECT && npm run lint` (ESLint is configured in many project roots).
- Build for production: `cd PROJECT && npm run build`.

# Debugging notes
- Typical dev server URL: `http://localhost:5173`.
- Vite errors usually show detailed stack traces in the terminal and overlay in the browser.

# What not to assume
- There are no centralized tests — each folder is a demo; do not assume shared CI/test setup exists.
- Some projects reference Tailwind or additional tooling; confirm by checking `package.json` and project README before adding configs.

# Where to look first (key files)
- Root README: `README.md`
- Example project to inspect: `01vitereact/package.json`, `01vitereact/src/main.jsx`
- Context example: `08miniContext/src` and `09themeChanger/src`
- Redux example: `11todoReduxToolkit/app` and `11todoReduxToolkit/features`
- Backend/integration: `12megaBlogAppwrite/appwrite` and `12megaBlogAppwrite/store`

# After making changes
- Keep changes focused and minimal; open a short PR describing which demo folder was updated and why.

If anything here is unclear or you'd like the instructions to emphasize other files or workflows, say which project or workflow and I'll update this file.
