import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import MyApplyTable from "./MyApplyTable";

const MyApplies = () => {
  const { user } = useContext(AuthContext);
  const [myApplies, setMyApplies] = useState(null);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `http://localhost:3000/registerdData?email=${user?.email}&search=${search}`
        )
        .then((result) => {
          setMyApplies(result?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user, search]);
  console.log(myApplies);
  return (
    <div>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-blue-500 italic font-bold mt-10 mb-2 text-center">
        My <span className=" text-black">Applies</span>
      </h1>
      <div className="divider mb-7"></div>
      <div className=" flex justify-center mb-13 ">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="input  rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-10 shadow-2xl">
        <table className="table">
          <thead>
            <tr>
              <th className=" text-center">no</th>
              <th className=" text-center">Title</th>
              <th className=" text-center">startDate</th>
              <th className=" text-center">Name</th>
              <th className=" text-center">Phone Number</th>
              <th className=" text-center">Update & Delete</th>
            </tr>
          </thead>
          <tbody>
            {myApplies?.map((myApply, index) => (
              <MyApplyTable
                myApply={myApply}
                myApplies={myApplies}
                setMyApplies={setMyApplies}
                index={index}
                key={myApply._id}
              ></MyApplyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplies;
