import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper className="space-y-4 text-left">
      <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
        ℹ️ About Us
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        This app demonstrates how to integrate <strong>React Router</strong>{" "}
        with Vite and Tailwind.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        React Router makes navigation easy, while Tailwind provides rapid UI
        styling.
      </p>
    </PageWrapper>
  );
}

// No props → no PropTypes needed
