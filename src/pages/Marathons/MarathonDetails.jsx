import React, { useContext } from "react";
import { motion } from "motion/react";
import { Link, useLoaderData } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet";

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

  const { user } = useContext(AuthContext);
  const registerd = data?.data.totalRegistrations.includes(user?.email);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };
  const todayDateObj = new Date();
  const registrationStartDateObj = parseDate(registrationStartDate);
  const registrationEndDateObj = parseDate(registrationEndDate);
  const [day, month, year] = marathonStartDate.split("/");
  const remainingTime = Math.floor(
    (new Date(`${year}-${month}-${day}`).getTime() - new Date().getTime()) /
      1000
  );

  const getTimeParts = (time) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    return { days, hours, minutes };
  };

  return (
    <div>
      <Helmet title="Marathon || Detail's"></Helmet>

      <div className="flex items-center  flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10 rounded-2xl p-3 shadow-2xl bg-secondary mt-10">
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
          <div className="absolute top-4 right-4 bg-transparent text-white px-3 py-2 rounded-full  shadow-lg">
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
          className="flex-1  h-[300px] overflow-scroll rounded-2xl shadow-2xl bg-secendary p-5"
        >
          <div className="md:flex justify-between bg-secendary">
            <div className="space-y-0.5 bg-secendary md:space-y-2">
              <h1>
                <span className="font-bold">Title: </span>
                {title}
              </h1>
              <h1>
                <span className="font-bold">Created at: </span>
                {createdAt}
              </h1>
            </div>
            <div className="space-y-2 bg-secendary">
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
          <p className="my-6 p-3 bg-secendary base-100 shadow-2xs rounded-2xl">
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

      <div className=" flex mt-12">
        {todayDateObj >= registrationStartDateObj &&
        todayDateObj <= registrationEndDateObj &&
        !registerd ? (
          <Link className="mx-auto" to={`/marathonRegistration/${_id}`}>
            <button className="btn border mx-auto">Register Now</button>
          </Link>
        ) : null}

        {todayDateObj >= registrationStartDateObj &&
        todayDateObj <= registrationEndDateObj &&
        registerd ? (
          <button className="btn border mx-auto">Already Registered</button>
        ) : null}
      </div>
    </div>
  );
};

export default MarathonDetails;
