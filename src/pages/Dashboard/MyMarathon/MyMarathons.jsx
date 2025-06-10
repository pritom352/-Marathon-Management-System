import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import MyMarathonTable from "./MyMarathonTable";

const MyMarathons = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [myMarathonList, setMyMarathonList] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/allData?email=${user?.email}`)
        .then((result) => {
          setMyMarathonList(result?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);
  console.log(myMarathonList);
  return (
    <div>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-blue-500 italic font-bold mt-10 mb-2 text-center">
        My Postde <span className=" text-black">Task</span>
      </h1>
      <div className="divider mb-20"></div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-10 shadow-2xl">
        <table className="table">
          <thead>
            <tr>
              <th className=" text-center">no</th>
              <th className=" text-center">Task</th>
              <th className=" text-center">Registration Start</th>
              <th className=" text-center">Registration End</th>
              <th className=" text-center">totalRegistrations</th>
              <th className=" text-center">Update Delete</th>
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
              ></MyMarathonTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathons;
