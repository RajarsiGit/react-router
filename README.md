# React Router Demo

A modern, responsive React application demonstrating React Router v7 with dark mode support, built with Vite and styled with Tailwind CSS.

## Features

- **React Router v7** - Client-side routing with multiple pages
- **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- **Tailwind CSS** - Modern utility-first styling
- **Vite** - Lightning-fast build tool and dev server
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **ESLint** - Code quality and consistency

## Project Structure

```
react-router/
├── src/
│   ├── components/
│   │   ├── Button.jsx       # Reusable button component with routing
│   │   ├── Footer.jsx        # Application footer
│   │   └── PageWrapper.jsx   # Page layout wrapper
│   ├── pages/
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Contact.jsx       # Contact page
│   │   └── NotFound.jsx      # 404 error page
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # Application entry point
├── index.html
├── package.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-router
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **React 19** - UI library
- **React Router DOM 7** - Routing solution
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing
- **ESLint** - Linting

## Pages

- **Home** (`/`) - Landing page
- **About** (`/about`) - About information
- **Contact** (`/contact`) - Contact details
- **404** (`*`) - Not found page for invalid routes

## Dark Mode

The application includes a dark mode toggle that:
- Persists user preference in localStorage
- Applies theme across all pages
- Provides smooth transitions between themes

## License

This project is open source and available under the MIT License.
