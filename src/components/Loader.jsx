import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" relative h-screen  flex justify-center items-center border">
      <div className="  top-1/2">
        <PulseLoader color="indigo-100" />
      </div>
    </div>
  );
};

export default Loader;
