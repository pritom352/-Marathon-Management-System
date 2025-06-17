import React from "react";

import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const Reviews = ({ textimonials }) => {
  return (
    <div className="mt-25">
      <h1 className=" mb-8 text-2xl md:text-3xl lg:text-4xl italic font-bold text-center text-shadow-2xs">
        <span className=" text-fuchsia-300">User</span> Reviews
      </h1>
      <div className="flex gap-5 items-center ">
        <Marquee>
          {textimonials.map((data) => (
            <ReviewCard key={data.name} data={data}></ReviewCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
