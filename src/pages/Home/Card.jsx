import React from "react";

const Card = ({ marathonData }) => {
  console.log(marathonData);
  const {
    image,
    registrationStartDate,
    registrationEndDate,
    title,
    _id,
    location,
  } = marathonData;

  return (
    <div className="  rounded-2xl bg-slate-50 p-3 shadow-2xl">
      <img className=" rounded-2xl" src={image} alt="" />
      <div className=" bg-white  rounded-2xl p-5 mt-4 shadow-2xl space-y-1.5">
        <h4>
          <span className=" font-bold">Title: </span>
          {title}
        </h4>
        <h4>
          <span className=" font-bold">Location: </span>
          {location}
        </h4>

        <h4>
          <span className=" font-bold">Registration Start Date: </span>
          {registrationStartDate}
        </h4>
        <h4>
          <span className=" font-bold">Registration End Date: </span>{" "}
          {registrationEndDate}
        </h4>
        <button className="relative mt-2  items-center justify-start inline-block px-3 py-2 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-blue-600 group">
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue-600 rounded-full"></span>
          <span className="relative w-full text-left text-blue-600 transition-colors duration-200 ease-in-out group-hover:text-white">
            See Details
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
