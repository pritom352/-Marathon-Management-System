import React, { useRef } from "react";
import Card from "./Card";
import { motion, useInView } from "motion/react";

const MarathonsSections = ({ marathonsData }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className=" bg-base-100 my-20">
      <motion.h1
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={
          inView
            ? {
                scale: 1,

                transition: { duration: 1 },
                opacity: 1,
                y: [50, 0],
              }
            : {}
        }
        className="text-3xl md:text-4xl lg:text-5xl  font-bold text-center italic mb-10"
      >
        <span className="text-fuchsia-300">Featured</span> Marathons
      </motion.h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-indigo-100 p-6 rounded-2xl  ">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default MarathonsSections;
