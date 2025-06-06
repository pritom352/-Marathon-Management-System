import React from "react";
import img1 from "../../assets/download.jpeg";
import img2 from "../../assets/images.jpeg";
import img3 from "../../assets/best-marathon-banner.jpg";
import { div } from "motion/react-client";

const Banner = () => {
  return (
    <div className=" bg-white">
      <div className="carousel    w-full h-[150px] md:h-[250px] lg:h-[550px] mt-15 rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
