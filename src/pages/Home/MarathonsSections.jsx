import React from "react";
import Card from "./Card";

const MarathonsSections = ({ marathonsData }) => {
  // console.log(marathonsData);
  return (
    <div className=" my-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default MarathonsSections;
