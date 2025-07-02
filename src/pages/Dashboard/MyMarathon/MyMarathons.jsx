import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import MyMarathonTable from "./MyMarathonTable";
import { Helmet } from "react-helmet";

const MyMarathons = () => {
  const { user } = useContext(AuthContext);
  const [myMarathonList, setMyMarathonList] = useState(null);
  const getMyMarathons = () => {
    axios
      .get(`https://assignmein11.vercel.app/allData?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((result) => {
        setMyMarathonList(result?.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (user) {
      getMyMarathons();
    }
  }, [user]);

  return (
    <div className="">
      <Helmet title="Marathon || My Marathon's"></Helmet>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl  italic font-bold pt-10 mb-2 text-center">
        <span className="text-primary">My Postde</span> Marathon
      </h1>
      <div className="divider mb-15"></div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-secondary shadow-2xl">
        <table className="table">
          <thead>
            <tr>
              <th className=" text-center">no</th>
              <th className=" text-center">Task</th>
              <th className=" text-center">Registration Start</th>
              <th className=" text-center">Registration End</th>
              <th className=" text-center">totalRegistrations</th>
              <th className=" text-center">Update & Delete</th>
            </tr>
          </thead>
          <tbody>
            {myMarathonList?.map((myMarathon, index) => (
              <MyMarathonTable
                myMarathon={myMarathon}
                myMarathonList={myMarathonList}
                setMyMarathonList={setMyMarathonList}
                index={index}
                key={myMarathon._id}
                getMyMarathons={getMyMarathons}
              ></MyMarathonTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathons;
