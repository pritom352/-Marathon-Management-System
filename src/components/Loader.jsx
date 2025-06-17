import React from "react";
import { PuffLoader, PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" relative lg:h-screen  ">
      <PuffLoader
        className=" absolute top-20 lg:top-1/2 mx-auto"
        size={160}
        color="red"
      />
    </div>
  );
};

export default Loader;
