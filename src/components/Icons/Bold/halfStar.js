import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  // or any color of your choice
  color = "#ffffff",
}) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.025 20.777a.998.998 0 0 0 1.53 1.057L12 18.204l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.997.997 0 0 0-1.822-.001L8.622 8.052l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452ZM12 5.431l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.8V5.431Z"></path>
    </svg>
  );
}
