"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
       className="fixed pointer-events-none w-10 h-10 border-2 border-gray-500 rounded-full 
       -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out z-50"

        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        a,
        button,
        [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
}
