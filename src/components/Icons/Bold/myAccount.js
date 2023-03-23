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
      <path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3ZM7.177 16c.558-1.723 2.496-3 4.823-3 2.327 0 4.266 1.277 4.823 3H7.177Z"></path>
    </svg>
  );
}
