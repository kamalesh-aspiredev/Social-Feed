import React, { useEffect } from "react";
import "../../App.css";

export default function Feelings({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-30 left-0 right-0 z-50 flex items-center justify-center mt-4">
      <div className="bg-green-500 p-3 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
        <p className="text-white font-semibold">{message}</p>
      </div>
    </div>
  );
}

// ---Here I have Used Tailwind.CSS instead of External CSS--
