import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import SectionTitle from "../../components/ReusableComponent/SectionTitle";

const UpcomingMarathons = ({ upcomingApi }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    upcomingApi.then((result) => {
      setData(result);
    });
  }, [upcomingApi]);

  return (
    <div className="   mt-20">
      <SectionTitle title={"Upcoming Marathons"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12   pt-0 rounded-2xl ">
        {data.map((data) => (
          <EventCard key={data.id} data={data}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
