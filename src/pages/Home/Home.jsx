import React, { useState } from "react";
import Banner from "./Banner";
import MarathonsSections from "./MarathonsSections";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [marathonsData, setMarathonsData] = useState(data?.data || []);
  console.log(marathonsData);
  return (
    <div>
      <Banner></Banner>
      <MarathonsSections marathonsData={marathonsData}></MarathonsSections>
    </div>
  );
};

export default Home;
