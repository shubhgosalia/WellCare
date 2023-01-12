import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
      <path d="M20 21a8 8 0 0 0-16 0m16 0a8 8 0 0 0-16 0h16Z"></path>
    </svg>
  );
}
