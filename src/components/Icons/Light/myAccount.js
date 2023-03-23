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
      <path d="M12 10c1.151 0 2-.848 2-2 0-1.152-.849-2-2-2-1.15 0-2 .848-2 2 0 1.152.85 2 2 2Zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6Z"></path>
      <path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Zm-5 15-2 2-2-2H5V4h14l.002 13H14Z"></path>
    </svg>
  );
}
