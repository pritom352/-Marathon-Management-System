import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Card from "../Home/Card";
import { Helmet } from "react-helmet";

const Marathons = () => {
  const allData = useLoaderData();
  const [sortOrder, setSortOrder] = useState("desc");
  const [marathonsData, setMarathonsData] = useState([]);

  useEffect(() => {
    const sorted = [...allData.data].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
    setMarathonsData(sorted);
  }, [sortOrder, allData.data]);

  return (
    <div className="my-20">
      <Helmet title="Marathon || All" />
      <h1 className=" text-5xl text-center font-bold mb-2">
        <span className="text-primary">All</span> Marathons
      </h1>
      <div className="divider mb-15"></div>

      <div className="text-center mb-15">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select
          className="select bg-secondary focus:bg-primary select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-fr">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;
