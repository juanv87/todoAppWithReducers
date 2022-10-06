import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Heading = () => {
  return (
    <>
      <div className="flex item-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2xl">Task app</h5>
        </Link>
      </div>
      <div className="flex-grow text-right px-4 py-2 m-2">
        <Link to="/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <IoMdAdd />
            Add Task
          </button>
        </Link>
      </div>
    </>
  );
};

export default Heading;
