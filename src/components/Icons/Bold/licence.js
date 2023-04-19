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
      <path d="M20 4H4c-1.103 0-2 .897-2 2v2h20V6c0-1.103-.897-2-2-2ZM2 18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6H2v6Zm3-3h6v2H5v-2Z"></path>
    </svg>
  );
}
