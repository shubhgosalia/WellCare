import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  // or any color of your choice
  color = "#ffffff",
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 22s8.03-5.56 8-12c0-4.411-3.589-8-8-8-4.41 0-8 3.589-8 7.995C3.971 16.44 11.696 21.784 12 22ZM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9Z"></path>
    </svg>
  );
}
