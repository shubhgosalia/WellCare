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
      <path d="M10.4 0C4.656 0 0 4.656 0 10.4c0 5.744 4.656 10.4 10.4 10.4a10.36 10.36 0 0 0 6.767-2.502l5.467 5.468 1.132-1.132-5.468-5.467A10.36 10.36 0 0 0 20.8 10.4C20.8 4.656 16.144 0 10.4 0Z"></path>
    </svg>
  );
}
