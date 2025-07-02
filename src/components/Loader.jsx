import React from "react";
import { PuffLoader, PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full">
      <div className=" relative lg:h-screen w-full ">
        <PuffLoader
          className=" absolute top-20 lg:top-1/2 mx-auto"
          size={160}
          color="red"
        />
      </div>
    </div>
  );
};

export default Loader;
