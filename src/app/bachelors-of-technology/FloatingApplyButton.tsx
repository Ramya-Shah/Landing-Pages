// FloatingApplyButton.tsx
"use client";

import React from "react";

const FloatingApplyButton: React.FC = () => {
  const applyLink = "https://applyadmission.net/DA-IICT2025/";

  const handleClick = () => {
    window.open(applyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        top-1/2
        right-0
        -translate-y-1/2
        bg-red-600
        hover:bg-red-700
        text-white
        font-bold
        px-3
        py-10
        text-xl
        shadow-lg
        z-50
      "
      style={{
        writingMode: "vertical-lr",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      Apply Now
    </button>
  );
};

export default FloatingApplyButton;
