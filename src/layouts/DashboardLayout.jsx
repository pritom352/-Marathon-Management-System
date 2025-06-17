import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex gap-10 justify-center items-start  max-w-10/11 md:max-w-9/11 lg:max-w-8/10 mx-auto relative  ">
        <div className="  flex flex-col gap-5 sticky top-52 lg:top-1/2  self-start">
          <NavLink to={"/dashboard/addMarathon"}>
            <button className=" btn w-full">Add Marathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myMarathons"}>
            <button className=" btn w-full">My Marathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myApplies"}>
            <button className=" btn w-full">My Applies</button>
          </NavLink>
        </div>
        <div className="max-w-10/11 md:max-w-9/11 lg:max-w-8/10 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
