import React from "react";
import { motion } from "motion/react";
import { Link, useLoaderData } from "react-router";

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
  } = data.data;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${year}-${month + 1}-${day}`;

  const todayDateObj = new Date(today);
  const registrationStartDateObj = new Date(registrationStartDate);
  const registrationEndDateObj = new Date(registrationEndDate);
  console.log("today", todayDateObj);
  console.log("start", registrationStartDateObj);

  return (
    <div>
      <div>
        <div className=" flex items-center border  flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10  rounded-2xl p-3 shadow-2xl bg-slate-50 mt-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            className=" flex-1  rounded-2xl shadow-2xl"
          >
            <img
              className=" w-fit h-full rounded-2xl overflow-hidden "
              src={image}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            className=" flex-1 border h-[300px] overflow-scroll  rounded-2xl shadow-2xl p-5"
          >
            <div className=" md:flex justify-between  ">
              <div className="space-y-0.5 md:space-y-2">
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
            <div className=" md:flex justify-between ">
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
                  <span className="font-bold ">Total Registrations: </span>
                  {totalRegistrations}
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border  flex mt-12">
        {todayDateObj >= registrationStartDateObj &&
        todayDateObj <= registrationEndDateObj ? (
          <Link to={`/marathonRegistration/${_id}`}>
            <button className="btn border mx-auto">registration</button>
          </Link>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default MarathonDetails;
