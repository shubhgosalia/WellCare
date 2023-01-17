import React from "react";

export default function Mail({
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
      <path d="M8 3v18"></path>
      <path d="M20 3v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Z"></path>
      <path d="M8 16.997c0-2 3.333-1.666 4.667-3 .666-.666-1.334-.666-1.334-4 0-2.222.889-3.333 2.667-3.333 1.778 0 2.667 1.111 2.667 3.333 0 3.334-2 3.334-1.334 4 1.334 1.334 4.667 1 4.667 3"></path>
    </svg>
  );
}
