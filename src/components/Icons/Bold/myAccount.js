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
      <path d="M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z"></path>
      <path
        fillRule="evenodd"
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8Z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M12 14a7 7 0 0 0-7 7 1 1 0 1 1-2 0 9 9 0 1 1 18 0 1 1 0 1 1-2 0 7 7 0 0 0-7-7Z"
        clipRule="evenodd"
      ></path>
      <path d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Z"></path>
      <path
        fillRule="evenodd"
        d="M5.07 20h13.86a7.001 7.001 0 0 0-13.86 0ZM3 21a9 9 0 1 1 18 0 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
