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
import SectionTitle from "../../components/ReusableComponent/SectionTitle";

const CountUpSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="my-20 px-4 ">
      <SectionTitle title={"Our Marathon Achievements"} />
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaRunning className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={150}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">Total Marathons Hosted</p>
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaUsers className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={12000}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">Total Participants</p>
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaMedal className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={9800}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">Total Successful Runners</p>
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaCity className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={40}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">Cities Covered</p>
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaHourglassStart className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={5}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">Years of Journey</p>
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
          className="bg-secondary rounded-2xl p-8 space-y-4 text-center"
        >
          <FaStar className="text-5xl text-primary mx-auto" />
          <div className="flex justify-center gap-1 items-end">
            <CountUp
              className="text-4xl font-extrabold "
              enableScrollSpy
              duration={4}
              end={650}
            />
            <span className="text-3xl font-bold ">+</span>
          </div>
          <p className="text-lg font-medium ">User Reviews</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CountUpSection;
