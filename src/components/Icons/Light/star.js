import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6.516 14.325-1.49 6.451a.998.998 0 0 0 1.529 1.058L12 18.204l5.445 3.63a1.001 1.001 0 0 0 1.517-1.107l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.46a.997.997 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107Zm2.853-4.327a.998.998 0 0 0 .832-.586L12 5.432l1.799 3.98a.998.998 0 0 0 .832.586l3.972.316-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.384-3.736-2.49a.995.995 0 0 0-1.109 0l-3.904 2.602 1.05-4.545a1 1 0 0 0-.276-.94l-3.038-2.963 4.09-.326Z"></path>
    </svg>
  );
}
