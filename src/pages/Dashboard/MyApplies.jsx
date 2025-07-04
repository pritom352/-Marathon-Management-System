import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import MyApplyTable from "./MyApplyTable";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader";

const MyApplies = () => {
  const { user } = useContext(AuthContext);
  const [myApplies, setMyApplies] = useState(null);
  const [search, setSearch] = useState("");

  console.log(search);
  const MyApplyUpdate = () => {
    axios
      .get(
        `https://assignmein11.vercel.app/registerdData?email=${user?.email}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((result) => {
        setMyApplies(result?.data);
      })
      .catch((error) => {});
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    setSearch(data);
  };
  useEffect(() => {
    if (user) {
      MyApplyUpdate();
    }
  }, [user, search]);

  return (
    <div>
      <Helmet title="Marathon || Applyed"></Helmet>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl  italic font-bold mt-20 mb-2 text-center">
        <span className="text-primary">My</span> Applies
      </h1>
      <div className="divider mb-15"></div>
      <form
        onSubmit={handleSearch}
        className=" flex justify-center  gap-5 mb-10 "
      >
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="input bg-secondary  rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white  "
        />
        <button className="relative  py-2 px-3 rounded-2xl full bg-primary text-white hover:text-black hover:bg-accent transition-all font-semibold">
          Search
        </button>
      </form>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-secondary mx-10 shadow-2xl">
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
                MyApplyUpdate={MyApplyUpdate}
              ></MyApplyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplies;
