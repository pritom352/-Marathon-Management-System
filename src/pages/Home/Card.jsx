import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import useFormatDate from "../../Hook/useFormatDate";

const Card = ({ marathonData }) => {
  const {
    image,

    title,
    _id,
    location,
  } = marathonData;
  const registrationStartDate = useFormatDate(
    marathonData.registrationStartDate
  );
  const registrationEndDate = useFormatDate(marathonData.registrationEndDate);
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
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="h-full rounded-2xl bg-secondary p-2 shadow-2xl flex flex-col">
        <img
          className="h-[150px] w-full rounded-2xl object-cover"
          src={image}
          alt={title}
        />

        <div className="flex flex-col justify-between flex-grow mt-2 space-y-1">
          <h4>
            <span className="font-bold">Title:</span> {title}
          </h4>
          <h4>
            <span className="font-bold">Location:</span> {location}
          </h4>
          <h4>
            <span className="font-bold">Start:</span> {registrationStartDate}
          </h4>
          <h4>
            <span className="font-bold">End:</span> {registrationEndDate}
          </h4>

          <Link to={`/marathon/${_id}`} className="mt-auto">
            <button className="relative w-full py-2 rounded-full bg-primary text-black hover:bg-accent hover:text-white transition-all font-semibold">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
