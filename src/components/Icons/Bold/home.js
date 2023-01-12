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
      <path d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"></path>
      <path
        fillRule="evenodd"
        d="M10.8 3.65a2 2 0 0 1 2.4 0l7 5.25-.6.8.6-.8a2 2 0 0 1 .8 1.6V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 .8-1.6l7-5.25Zm1.2 1.6L5 10.5V19h4v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3h4v-8.5l-7-5.25Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
