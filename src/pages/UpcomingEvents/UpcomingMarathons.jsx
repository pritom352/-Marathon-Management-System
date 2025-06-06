import React, { use, useRef } from "react";
import EventCard from "./EventCard";
import { motion, useInView } from "motion/react";

const UpcomingMarathons = ({ upcomingApi }) => {
  const data = use(upcomingApi);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className=" bg-white pt-15">
      <motion.h1
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        // whileHover={{ scale: 1.03 }}
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
        className="text-3xl md:text-4xl lg:text-5xl text-blue-500 font-bold text-center italic mb-10"
      >
        Upcoming <span className="text-black">Marathons</span>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 bg-slate-50  p-5 rounded-2xl shadow-2xs">
        {data.map((data) => (
          <EventCard key={data.id} data={data}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
