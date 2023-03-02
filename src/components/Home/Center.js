import React, { useState } from "react";

// importing Files
import Categories from "components/Home/Categories";

const Part1 = ({ profile }) => {
  // const [hour,setHour] = useState();

  return (
    <div className="flex flex-col space-y-5 w-full pt-5 pb-10 justify-between min-h-screen">
      {/*  */}
      <div className="flex flex-col space-y-6 w-full">
        {/* Title */}
        <div className="flex flex-row space-x-3 text-white text-4xl">
          <span className="my-auto">Good Morning,</span>
          <br />
          <span className="font-bold text-primary-blue">{profile.name}</span>
        </div>

        {/* Description */}
        <div className="text-dark-700 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          facere nesciunt non quisquam sapiente odio illo nisi? Fuga, accusamus
          sapiente! Voluptatum nihil at corrupti veritatis, et non animi
          inventore quis. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptate, facere nesciunt non quisquam sapiente odio illo nisi?
          Fuga, accusamus sapiente! Voluptatum nihil at corrupti veritatis, et
          non animi inventore quis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptate, facere nesciunt non quisquam sapiente
          odio illo nisi? Fuga, accusamus sapiente! Voluptatum nihil at corrupti
          veritatis, et non animi inventore quis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptate, facere nesciunt non quisquam
          sapiente odio illo nisi? Fuga, accusamus sapiente! Voluptatum nihil at
          corrupti veritatis, et non animi inventore quis. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptate, facere nesciunt non
          quisquam sapiente odio illo nisi? Fuga, accusamus sapiente! Voluptatum
          nihil at corrupti veritatis, et non animi inventore quis.
        </div>

        {/* Button */}
        <div className="w-1/3 mx-auto button">See Suggestions</div>
      </div>

      {/* Categories */}
      <Categories />
    </div>
  );
};

export default Part1;
