import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "white",
}) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m2.6 13.08 3.452 1.511L16 9.164l-6 7 8.6 3.916a1 1 0 0 0 1.4-.85l1-15a1.001 1.001 0 0 0-1.425-.972l-17 8A1.002 1.002 0 0 0 2.6 13.08ZM8 22.164l4.776-2.316L8 17.62v4.544Z"></path>
    </svg>
  );
}
