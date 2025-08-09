import React from "react";

import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../../components/ReusableComponent/SectionTitle";

const Reviews = ({ textimonials }) => {
  return (
    <div className="mt-20">
      <SectionTitle title={"User Reviews"} />
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
