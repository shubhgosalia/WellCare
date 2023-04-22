import React from "react";
import { useState } from "react";

const Pagination = ({next}) => {
  let [number, setNumber] = useState(1);
  let [current, setCurrent] = useState(1);

  const pages = [
    { page: number },
    // { page: number + 1 },
    // { page: number + 2 },
    // { page: number + 3 },
  ];

  function Next() {
    setNumber(++number);
  }

  function Prev() {
    number > 1 && setNumber(--number);
  }

  return (
    <div className="flex bg-white rounded-lg p-3 text-blue-800 inset-x-0 bottom-0">
      <button
        onClick={Prev}
        className="h-9 border-2 border-primary-blue px-4 rounded-r-lg hover:bg-primary-blue hover:text-white ml-1 mr-3"
      >
        <h3 className="text-xl font-medium">Prev</h3>
      </button>

      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCurrent(pg.page)}
          className={`text-lg rounded-full h-9 border-2 border-r-0 border-primary-blue w-14 mr-2 ${
            current === pg.page && "bg-primary-blue text-white"
          }`}
        >
          {pg.page}
        </button>
      ))}

      <button
        onClick={Next}
        disabled={!next}
        className="h-9 border-2 border-primary-blue px-4 rounded-r-lg hover:bg-primary-blue hover:text-white ml-1 mr-1"
      >
        <h3 className="text-xl">Next</h3>
      </button>
    </div>
  );
};

export default Pagination;
