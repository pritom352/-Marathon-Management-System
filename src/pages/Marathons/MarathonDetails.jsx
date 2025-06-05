import React from "react";
import { useLoaderData } from "react-router";

const MarathonDetails = () => {
  const data = useLoaderData();
  // console.log(data.data);
  const {
    createdAt,
    description,
    distance,
    image,
    location,
    marathonStartDate,
    registrationEndDate,
    registrationStartDate,
    title,
    totalRegistrations,
    _id,
  } = data?.data;

  return (
    <div>
      <div className=" grid grid-cols-2 gap-10  rounded-2xl p-3 shadow-2xl bg-slate-50 mt-10">
        <div className=" flex-1  rounded-2xl shadow-2xl">
          <img
            className=" w-fit h-full rounded-2xl overflow-hidden "
            src={image}
            alt=""
          />
        </div>
        <div className=" flex-1  rounded-2xl shadow-2xl p-5">
          <div className=" flex justify-between ">
            <div className=" space-y-2">
              <h1>
                <span className="font-bold">Title: </span>
                {title}
              </h1>
              <h1>
                <span className="font-bold">Creat at: </span>
                {createdAt}
              </h1>
            </div>
            <div className=" space-y-2">
              <h1>
                <span className="font-bold">Location: </span>
                {location}
              </h1>
              <h1>
                <span className="font-bold">Distance: </span>
                {distance}
              </h1>
            </div>
          </div>
          <p className=" my-6 p-3 bg-white shadow-2xs rounded-2xl">
            {description}
          </p>
          <div className=" flex justify-between ">
            <div className=" space-y-2">
              <h1>
                <span className="font-bold">Registration Start Date: </span>
                {registrationStartDate}
              </h1>
              <h1>
                <span className="font-bold">Marathon Start Date: </span>
                {marathonStartDate}
              </h1>
            </div>
            <div className=" space-y-2">
              <h1>
                <span className="font-bold">Registration End Date: </span>
                {registrationEndDate}
              </h1>
              <h1>
                <span className="font-bold">Total Registrations: </span>
                {totalRegistrations}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
