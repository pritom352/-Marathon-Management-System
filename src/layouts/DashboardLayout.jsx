import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex gap-10 justify-center items-start ">
        <div className="w-1/5 border flex flex-col gap-5 ">
          <NavLink to={"/dashboard/addMarathon"}>
            <button>Add Marathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myMarathons"}>
            <button>myMarathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myApplies"}>
            <button>myApplies</button>
          </NavLink>
        </div>
        <div className="4/5 border">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
