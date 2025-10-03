import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className="space-y-4 text-left">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        🏠 Welcome to Home
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is the home page of our React Router demo app. Navigate using the
        buttons above.
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>⚡ Built with Vite for fast dev builds</li>
        <li>🎨 Styled using Tailwind CSS</li>
        <li>🛣️ Routing powered by React Router</li>
      </ul>
    </PageWrapper>
  );
}

// No props → no PropTypes needed
