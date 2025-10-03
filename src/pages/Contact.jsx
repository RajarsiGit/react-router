import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper className="space-y-4 text-left">
      <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
        📞 Contact Page
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Got questions? Reach out to us via the details below:
      </p>
      <div className="bg-white dark:bg-gray-600 border rounded-lg p-4 shadow text-gray-700 dark:text-gray-200">
        <p>
          <strong>Email:</strong> demo@app.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Address:</strong> 123 React Street, Router City
        </p>
      </div>
    </PageWrapper>
  );
}

// No props → no PropTypes needed
