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
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 12H9m10 0-4-4m4 4-4 4"></path>
      <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
    </svg>
  );
}
