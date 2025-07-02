import React, { useRef } from "react";
import Card from "./Card";
import { motion, useInView } from "motion/react";

const MarathonsSections = ({ marathonsData }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="   mt-20">
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
        className="text-3xl md:text-4xl lg:text-5xl  font-bold text-center italic mb-15"
      >
        <span className="text-primary">Featured</span> Marathons
      </motion.h1>

      <div className=" grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-5 auto-rows-fr  rounded-2xl  ">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default MarathonsSections;
