import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import CountUp from "react-countup";
import {
  FaRunning,
  FaUsers,
  FaMedal,
  FaCity,
  FaHourglassStart,
  FaStar,
} from "react-icons/fa";

const CountUpSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
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
      className="my-20 px-4 sm:px-6 lg:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="text-fuchsia-300">Our Marathon</span> Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaRunning className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={150}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">
            Total Marathons Hosted
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,

                  transition: { duration: 1.2 },
                  opacity: 1,
                  y: [50, 0],
                }
              : {}
          }
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaUsers className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={12000}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">
            Total Participants
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,

                  transition: { duration: 1.4 },
                  opacity: 1,
                  y: [50, 0],
                }
              : {}
          }
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaMedal className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={9800}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">
            Total Successful Runners
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,

                  transition: { duration: 1.6 },
                  opacity: 1,
                  y: [50, 0],
                }
              : {}
          }
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaCity className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={40}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">Cities Covered</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,

                  transition: { duration: 1.8 },
                  opacity: 1,
                  y: [50, 0],
                }
              : {}
          }
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaHourglassStart className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={5}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">Years of Journey</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,

                  transition: { duration: 2 },
                  opacity: 1,
                  y: [50, 0],
                }
              : {}
          }
          className="bg-indigo-100 rounded-2xl p-8 space-y-4 text-center"
        >
          <FaStar className="text-5xl text-indigo-600 mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold text-indigo-700"
              enableScrollSpy
              duration={4}
              end={650}
            />
            <span className="text-3xl font-bold text-indigo-700">+</span>
          </div>
          <p className="text-lg font-medium text-gray-700">User Reviews</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CountUpSection;
