import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import { Link, useLoaderData } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AuthContext } from "../../context/AuthContext";

const MarathonDetails = () => {
  const data = useLoaderData();
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

  console.log(registrationStartDate);
  console.log(registrationEndDate);
  console.log(marathonStartDate);

  const { user } = useContext(AuthContext);
  const registerd = data?.data.totalRegistrations.includes(user?.email);

  // console.log("registerd", registerd);
  // console.log(totalRegistrations.length);

  const today = new Date().toLocaleDateString("en-GB");
  // const day = date.getDate();
  // const month = date.getMonth();
  // const year = date.getFullYear();
  // const today = `${day}/${month + 1}/${year}`;
  console.log(today);

  const todayDateObj = today;
  const registrationStartDateObj = new Date(registrationStartDate);
  // console.log(registrationStartDate);

  const registrationEndDateObj = new Date(registrationEndDate);
  // console.log(registrationEndDateObj);
  const [day, month, year] = marathonStartDate.split("/");
  const remainingTime = Math.floor(
    (new Date(`${year}-${month}-${day}`).getTime() - new Date().getTime()) /
      1000
  );
  console.log("remainingTime", marathonStartDate);

  const getTimeParts = (time) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    return { days, hours, minutes };
  };

  return (
    <div>
      <div className="flex items-center border flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10 rounded-2xl p-3 shadow-2xl bg-slate-50 mt-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex-1 rounded-2xl shadow-2xl"
        >
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={image}
            alt=""
          />
          {/* Countdown timer overlay */}
          <div className="absolute top-4 right-4 bg-transparent px-3 py-2 rounded-full shadow-lg">
            <CountdownCircleTimer
              isPlaying
              duration={remainingTime}
              size={100}
              strokeWidth={6}
              colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
              onComplete={() => ({ shouldRepeat: false })}
            >
              {({ remainingTime }) => {
                const { days, hours, minutes } = getTimeParts(remainingTime);
                return (
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {days}d<br />
                    {hours}h<br />
                    {minutes}m
                  </div>
                );
              }}
            </CountdownCircleTimer>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 border h-[300px] overflow-scroll rounded-2xl shadow-2xl p-5"
        >
          <div className="md:flex justify-between">
            <div className="space-y-0.5 md:space-y-2">
              <h1>
                <span className="font-bold">Title: </span>
                {title}
              </h1>
              <h1>
                <span className="font-bold">Created at: </span>
                {createdAt}
              </h1>
            </div>
            <div className="space-y-2">
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
          <p className="my-6 p-3 bg-white shadow-2xs rounded-2xl">
            {description}
          </p>
          <div className="md:flex justify-between">
            <div className="space-y-2">
              <h1>
                <span className="font-bold">Registration Start Date: </span>
                {registrationStartDate}
              </h1>
              <h1>
                <span className="font-bold">Marathon Start Date: </span>
                {marathonStartDate}
              </h1>
            </div>
            <div className="space-y-2">
              <h1>
                <span className="font-bold">Registration End Date: </span>
                {registrationEndDate}
              </h1>
              <h1>
                <span className="font-bold">Total Registrations: </span>
                {totalRegistrations.length}
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border flex mt-12">
        {todayDateObj >= registrationStartDateObj &&
        todayDateObj <= registrationEndDateObj &&
        registerd === false ? (
          <Link to={`/marathonRegistration/${_id}`}>
            <button className="btn border mx-auto">Register Now</button>
          </Link>
        ) : (
          ""
        )}
        {todayDateObj >= registrationStartDateObj &&
        todayDateObj <= registrationEndDateObj &&
        registerd === true ? (
          <button className="btn border mx-auto ">Already Registered</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MarathonDetails;
