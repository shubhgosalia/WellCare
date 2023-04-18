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
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        clip-rule="evenodd"
      ></path>
      <path
        fill-rule="evenodd"
        d="M5.401 6.23c-.44.33-.844.678-1.211 1.032a15.088 15.088 0 0 0-3 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.237 0 4.1-.65 5.61-1.562l-3.943-3.943a3 3 0 0 1-4.161-4.161L5.4 6.229Zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3.001-4.111C18.061 5.577 15.483 4 12.001 4a10.83 10.83 0 0 0-2.809.363l11.475 11.475Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
