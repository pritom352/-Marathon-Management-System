import React, { useRef, useState } from "react";
import img2 from "../../assets/istockphoto-184839421-612x612.jpg";
import img1 from "../../assets/marathons-2.avif";
import img3 from "../../assets/best-marathon-banner.jpg";
import { motion, useInView } from "motion/react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: 1,

        transition: { duration: 1 },
        opacity: 1,
        y: [50, 0],
      }}
      className="bg-base-100"
    >
      <div className="carousel w-full h-[150px] md:h-[250px] lg:h-[550px] mt-15 rounded-2xl">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          {currentSlide === 1 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, delay: 1 },
                x: [-500, 0],
              }}
              className="absolute top-40 left-0  h-fit  border rounded-br-[100px] bg-red-200 w-[400px]  opacity-70 flex flex-col justify-center items-center text-white p-5"
            >
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
                Join the City Marathon 2025!
              </h2>
              <p className="mt-2 md:text-lg text-sm">
                Run with thousands and make history. Registration now open.
              </p>
            </motion.div>
          )}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              onClick={() => setCurrentSlide(3)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              onClick={() => setCurrentSlide(2)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" />
          {currentSlide === 2 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, delay: 1 },
                x: [-500, 0],
              }}
              className="absolute top-40 left-0  h-fit  border rounded-br-[100px] bg-red-200 w-[400px]  opacity-70 flex flex-col justify-center items-center text-white p-5"
            >
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                Create & Manage Marathons
              </h2>
              <p className="mt-2 md:text-lg text-sm">
                Organizers can easily schedule events and track participants.
              </p>
            </motion.div>
          )}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              onClick={() => setCurrentSlide(1)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              onClick={() => setCurrentSlide(3)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" />
          {currentSlide === 3 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, delay: 1 },
                x: [-500, 0],
              }}
              className="absolute top-40 left-0  h-fit  border rounded-br-[100px] bg-red-200 w-[400px]  opacity-70 flex flex-col justify-center items-center text-white p-5"
            >
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                Track Your Progress
              </h2>
              <p className="mt-2 md:text-lg text-sm">
                View your dashboard, manage your events, and track results.
              </p>
            </motion.div>
          )}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              onClick={() => setCurrentSlide(2)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              onClick={() => setCurrentSlide(1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
