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
      <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.03 16.44 20 10c0-4.411-3.589-8-8-8-4.41 0-8 3.589-8 7.996-.029 6.444 7.116 11.602 7.42 11.819ZM12 4c3.31 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.61-1.308-6.02-5.293-6-9.735 0-3.309 2.691-6 6-6Z"></path>
      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3v3Z"></path>
    </svg>
  );
}
