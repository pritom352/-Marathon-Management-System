import React, { useEffect, useRef, useState } from "react";
import EventCard from "./EventCard";
import { motion, useInView } from "motion/react";

const UpcomingMarathons = ({ upcomingApi }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    upcomingApi.then((result) => {
      setData(result);
    });
  }, [upcomingApi]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className=" border  mt-20">
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
        <span className="text-primary">Upcoming</span> Marathons
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12   p-6 pt-0 rounded-2xl shadow-2xs">
        {data.map((data) => (
          <EventCard key={data.id} data={data}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
