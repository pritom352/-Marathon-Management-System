import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const EventCard = ({ data }) => {
  const {
    name,
    date,
    time,
    location,
    registration_start,
    registration_end,
    total_km,
  } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
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
      className="flex gap-5   group rounded-2xl "
    >
      <div className=" h-full w-0  bg-primary opacity-70   group-hover:w-9  duration-500   rounded-2xl shadow-2xl "></div>
      <div className=" w-full p-5  text-center bg-secondary space-y-1 rounded-2xl  shadow-2xl">
        <h1 className=" font-bold">Title: {name}</h1>
        <p>
          <span className=" font-bold">Location: </span>
          {location}
        </p>
        <p>
          <span className=" font-bold">Registration Start: </span>
          {registration_start}
        </p>
        <p>
          <span className=" font-bold">Registration End: </span>
          {registration_end}
        </p>
        <p>
          <span className=" font-bold">Date: </span>
          {date}
        </p>
        <div className=" flex justify-between items-center">
          <p>
            <span className=" font-bold">Time: </span>
            {time}
          </p>
          <p>
            <span className=" font-bold">Total KM: </span>
            {total_km}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
