import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";

const Card = ({ marathonData }) => {
  //   console.log(marathonData);
  const {
    image,
    registrationStartDate,
    registrationEndDate,
    title,
    _id,
    location,
  } = marathonData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
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
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="  rounded-2xl bg-slate-50 p-3 shadow-2xl">
        <img className=" h-[150px] w-full rounded-2xl" src={image} alt="" />
        <div className="  rounded-2xl p-5 mt-4 shadow-2xl space-y-0.5 md:space-y-1.5">
          <h4 className=" text-[14px] md:text-[16px]">
            <span className=" font-bold">Title: </span>
            {title}
          </h4>
          <h4 className=" text-[14px] md:text-[16px]">
            <span className=" font-bold">Location: </span>
            {location}
          </h4>

          <h4 className=" text-[14px] md:text-[16px]">
            <span className=" font-bold">Registration Start Date: </span>
            {registrationStartDate}
          </h4>
          <h4 className=" text-[14px] md:text-[16px]">
            <span className=" font-bold">Registration End Date: </span>{" "}
            {registrationEndDate}
          </h4>
          <Link to={`/marathon/${_id}`}>
            <button className="relative mt-1 md:mt-2  items-center justify-start inline-block   px-1 md:px-3 py-1 md:py-2 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-blue-600 group">
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue-600 rounded-full"></span>
              <span className="relative w-full text-left text-blue-600 text-[14px] md:text-[16px] transition-colors duration-200 ease-in-out group-hover:text-white">
                See Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
