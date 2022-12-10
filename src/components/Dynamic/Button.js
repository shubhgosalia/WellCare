import React from "react";

export default function Button({
  color = "black",
  text = "Button", // or any color of your choice
}) {
  return (
    <div className="w-1/3 mx-auto text-center p-2 bg-primary-blue hover:bg-secondary-blue rounded-full font-bold text-xl text-white cursor-pointer">
      {text}
    </div>
  );
}
