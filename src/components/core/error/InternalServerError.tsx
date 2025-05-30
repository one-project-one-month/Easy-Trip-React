import { AlertTriangle } from "lucide-react";

export default function InternalServerErrorScreen() {
  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-red-50 z-50">
      <AlertTriangle className="w-16 h-16 text-neutral-500 mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-2">
        500 Internal Server Error
      </h1>
      <p className="text-gray-700 mb-4 text-center max-w-md">
        Oops! Something went wrong on our end. Please try again later or contact
        support if the problem persists.
      </p>
      <button
        className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-neutral-600 transition"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}
