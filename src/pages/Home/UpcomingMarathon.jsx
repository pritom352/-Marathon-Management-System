import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
} from "react-icons/fa";
import formatDate from "../../utils/formatDate";
import SectionTitle from "../../components/ReusableComponent/SectionTitle";
import Loader from "../../components/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

const UpcomingMarathon = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios
      .get("https://assignmein11.vercel.app/upcomingMarathons")
      .then((res) => {
        setMarathons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load upcoming marathons.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorPage message={error} />; // Error page দেখাবে

  if (marathons.length === 0)
    return (
      <p className="text-center mt-10 text-lg font-semibold">
        No upcoming marathons found.
      </p>
    );

  return (
    <section className="space-y-12 mt-25">
      <SectionTitle title="Upcoming Marathon" />
      {marathons.map((marathon) => {
        const regStart = formatDate(marathon.registrationStartDate);
        const regEnd = formatDate(marathon.registrationEndDate);
        const marathonDate = formatDate(marathon.marathonStartDate);

        return (
          <div key={marathon._id}>
            <div className="flex flex-col md:flex-row rounded-xl min-h-[350px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Left Part */}
              <div className="bg-primary flex flex-col justify-center items-center p-6 md:w-1/6 w-full space-y-6">
                <p className="font-extrabold text-2xl tracking-wide">
                  {marathonDate}
                </p>
                <button className="px-6 py-2 border border-white rounded-full hover:bg-accent hover:text-primary transition duration-300 font-semibold">
                  Details
                </button>
              </div>

              {/* Middle Part */}
              <div className="bg-secondary flex flex-col justify-center p-6 md:w-3/6 w-full space-y-6 text-gray-900">
                <h2 className="text-3xl font-bold tracking-wide">
                  {marathon.title}
                </h2>

                <div className="flex items-center gap-3 text-xl">
                  <FaMapMarkerAlt className="text-primary shrink-0" />
                  <span>{marathon.location}</span>
                </div>

                <div className="flex flex-col gap-2 text-lg">
                  <div className="flex items-center gap-3">
                    <FaRegCalendarCheck className="text-primary shrink-0" />
                    <span>
                      Registration Start: <strong>{regStart}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegCalendarTimes className="text-primary shrink-0" />
                    <span>
                      Registration End: <strong>{regEnd}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Part */}
              <div className="md:w-2/6 w-full">
                <img
                  src={marathon.image}
                  alt={marathon.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default UpcomingMarathon;
