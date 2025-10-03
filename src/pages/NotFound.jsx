import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <PageWrapper className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">
        🚨 404 - Page Not Found
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button to="/" color="blue">
        ⬅️ Go Back Home
      </Button>
    </PageWrapper>
  );
}

// No props → no PropTypes needed
