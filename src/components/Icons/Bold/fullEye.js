import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "white",
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.19 7.262C5.94 5.577 8.518 4 12 4c3.483 0 6.061 1.577 7.811 3.262a15.086 15.086 0 0 1 3 4.11c.193.399.193.857 0 1.255a15.086 15.086 0 0 1-3 4.111C18.061 18.423 15.483 20 12.001 20c-3.483 0-6.061-1.577-7.811-3.262a15.088 15.088 0 0 1-3-4.11 1.435 1.435 0 0 1 0-1.255 15.088 15.088 0 0 1 3-4.111ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
