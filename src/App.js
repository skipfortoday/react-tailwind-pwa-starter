import React, { useState, useEffect } from "react";

const App = () => {
  const [val, setVal] = useState(null);
  const [data, setData] = useState([]);

  const removeElement = (id) => {
    const temp = [...data];
    temp.splice(id, 1);
    setData(temp);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setData((prevArray) => [...prevArray, val]);
      setVal(null);
    }
  };
  const handleClick = () => {
    setData((prevArray) => [...prevArray, val]);
    setVal(null);
  };

  const listItems = data.map((key, index) => (
    <div>
      <div className="bg-white shadow-lg drop-shadow-lg rounded mx-40  my-4 p-1 flex md:bg-orange text-center">
        <div className="text-center align-middle container">
          <h5 className="text-xl text-center tracking-tight font-extrabold text-gray-900 ">
            {index + 1} -{" "}
            <span className="block text-cyan-600 xl:inline text-center">
              {key}
            </span>
          </h5>
        </div>
        <p className=" text-xl block  tracking-tight font-extrabold  xl:inline text-center ">
          Prefix-
        </p>
        <p className=" text-xl block  tracking-tight font-extrabold text-red-600 xl:inline text-center ">
          {key.slice(-2)}
        </p>
        <button
          type="button"
          className="inline-flex justify-center  mx-2 px-2 py-2 text-xs font-medium text-red-900 bg-red-200 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-200"
          onClick={() => removeElement(index)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="px-10">
      <div className="bg-white shadow-lg drop-shadow-lg rounded mx-auto my-5 p-5 flex md:bg-orange text-center">
        <div className="text-center align-middle container">
          <h1 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline ">T-card</span>{" "}
            <span className="block text-cyan-600 xl:inline text-center">
              Check Apps
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-white shadow-lg drop-shadow-lg rounded mx-auto p-1 flex md:bg-orange text-center">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 text-center focus:border-indigo-500 block w-full pl-7 pr-12 text-xl border-gray-300 rounded-md"
          placeholder="Scan No Tcard..."
          onKeyDown={handleKeyDown}
          value={val}
          onChange={(value) => setVal(value.target.value)}
        />
        <button
          type="button"
          className="inline-flex justify-center  mx-2 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          onClick={handleClick}
        >
          Go
        </button>
      </div>
      {data[0] ? listItems : ""}
    </div>
  );
};

export default App;
