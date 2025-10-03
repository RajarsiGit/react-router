# CLAUDE.md

This document provides context for Claude Code (AI assistant) when working with this React Router project.

## Project Overview

This is a React Router demonstration application built as a learning project to showcase client-side routing, dark mode implementation, and modern React patterns.

**Tech Stack:**
- React 19.1.1
- React Router DOM 7.9.3
- Vite 7.1.7
- Tailwind CSS 3.4.17

## Architecture & Patterns

### Component Structure

1. **App.jsx** - Root component
   - Manages global dark mode state
   - Implements localStorage persistence
   - Contains routing configuration
   - Layout and navigation structure

2. **Components** (`src/components/`)
   - `Button.jsx` - Reusable button with NavLink integration
   - `Footer.jsx` - Application footer
   - `PageWrapper.jsx` - Page layout wrapper component

3. **Pages** (`src/pages/`)
   - `Home.jsx` - Landing page
   - `About.jsx` - About page
   - `Contact.jsx` - Contact page
   - `NotFound.jsx` - 404 error page

### State Management

- **Dark Mode**: Managed in `App.jsx` using `useState` and `useEffect`
- **Persistence**: Uses `localStorage` to save user theme preference
- **No global state library**: Uses React's built-in state management

### Routing Configuration

Routes are defined in `App.jsx` using React Router v7:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Tailwind's dark mode with `dark:` prefix
- **Responsive**: Mobile-first breakpoints (sm, md, lg, xl)
- **Custom Colors**: Uses Tailwind's default color palette

## Development Guidelines

### When Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `App.jsx` Routes section
3. Add navigation button if needed
4. Follow existing naming conventions

### When Modifying Styles

- Use Tailwind utility classes
- Include dark mode variants with `dark:` prefix
- Maintain responsive design patterns
- Keep transitions smooth with `transition-colors`

### Code Standards

- Use functional components with hooks
- PropTypes for type checking
- ES6+ syntax
- Descriptive component and function names

## Common Tasks

### Adding a New Route

1. Create component in `src/pages/NewPage.jsx`
2. Import in `App.jsx`
3. Add `<Route path="/new-page" element={<NewPage />} />`
4. Add navigation button in nav section

### Modifying Dark Mode

- Dark mode state is in `App.jsx:11`
- Toggle button in `App.jsx:37-42`
- localStorage logic in `App.jsx:13-20`

### Changing Layout

- Main layout wrapper is in `App.jsx:24-70`
- Responsive classes: `w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4`

## Build & Deploy

- **Dev**: `npm run dev` (Vite dev server on port 5173)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (preview production build)

## Known Patterns

- Navigation uses `<Button nav>` component with React Router's NavLink
- All pages should receive dark mode context through parent structure
- Footer is static across all pages
- 404 page catches all unmatched routes with `path="*"`

## Dependencies to Note

- **React 19**: Latest React version with modern features
- **React Router v7**: Latest routing with improved performance
- **Vite 7**: Next-gen frontend tooling
- **PropTypes**: Runtime type checking (not TypeScript)

## File Locations

- Entry point: `src/main.jsx`
- Root component: `src/App.jsx`
- HTML template: `index.html`
- Tailwind config: `tailwind.config.js`
- Vite config: `vite.config.js`

## Future Enhancement Ideas

- Add more pages (Services, Portfolio, Blog, etc.)
- Implement form handling on Contact page
- Add animations/transitions between routes
- Include loading states
- Add metadata/SEO optimization per route
- Implement breadcrumb navigation
- Add scroll-to-top on route change
