import { useEffect } from "react";

export default function GenerateLoader() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-white z-50 pointer-events-none">
      <div className="flex items-center space-x-2 text-lg font-semibold text-neutral-700">
        <span className="animate-pulse">Generating</span>
        <span className="flex space-x-1">
          <span className="animate-bounce [animation-delay:-0.2s]">.</span>
          <span className="animate-bounce [animation-delay:-0.1s]">.</span>
          <span className="animate-bounce">.</span>
        </span>
      </div>
    </div>
  );
}
