import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const App = () => {
  const [val, setVal] = useState(null);
  const [data, setData] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const removeElement = (id) => {
    const temp = [...data];
    temp.splice(id, 1);
    setData(temp);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (data.find((element) => element === val)) {
        openModal();
      } else if (val !== "") {
        setData((prevArray) => [...prevArray, val]);
        setVal("");
      }
    }
  };
  const handleClick = () => {
    if (data.find((element) => element === val)) {
      openModal();
    } else if (val !== "") {
      setData((prevArray) => [...prevArray, val]);
      setVal("");
    }
  };

  const listItems = data.map((key, index) => (
    <div>
      <div className="bg-white shadow-lg drop-shadow-lg rounded  my-4 px-1 flex md:bg-orange text-center">
        <p className=" text-xl block  tracking-tight font-extrabold  xl:inline text-center ">
          {index + 1}.
        </p>
        <div className="text-center align-middle container">
          <h5 className="text-xl text-center tracking-tight  text-gray-700 ">
            {key}
          </h5>
        </div>
        <p className=" text-xl block  tracking-tight  xl:inline text-center ">
          Prefix-
        </p>
        <p className=" text-xl block  tracking-tight font-bold text-red-600 xl:inline text-center ">
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
    <div className="px-2 xl:px-60">
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
      <div className="bg-white shadow-lg drop-shadow-lg rounded mx-auto mb-10 p-1 flex md:bg-orange text-center ">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 text-center focus:border-indigo-500 block w-full text-xl border-gray-300 rounded-md"
          placeholder="Scan No Tcard..."
          onKeyDown={handleKeyDown}
          value={val}
          onChange={(value) => {
            setVal(value.target.value);
          }}
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Double Input
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your input text is same with an existing data, Please check
                    again last number of T-card .
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Go check, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default App;
