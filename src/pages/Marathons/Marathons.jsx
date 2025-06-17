import { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../Home/Card";
import { Helmet } from "react-helmet";

const Marathons = () => {
  const allData = useLoaderData();
  const [marathonsData, setMarathonsData] = useState(allData.data);

  return (
    <div>
      <Helmet title="Marathon || All"></Helmet>
      <h1 className=" my-15 text-5xl text-center font-bold">
        {" "}
        <span className="text-fuchsia-300">All</span> Marathons
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
