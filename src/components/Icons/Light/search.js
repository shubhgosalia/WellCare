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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m20 20-4.05-4.05L20 20Zm-4.05-4.05A7.002 7.002 0 0 0 8.321 4.533a7 7 0 1 0 7.63 11.417v0Z"></path>
    </svg>
  );
}
