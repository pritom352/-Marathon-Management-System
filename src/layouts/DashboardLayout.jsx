import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex gap-10 justify-center items-start  max-w-10/11 md:max-w-9/11 lg:max-w-8/10 mx-auto relative border ">
        <div className="w-1/5 border flex flex-col gap-5 sticky top-20 left-6 self-start">
          <NavLink to={"/dashboard/addMarathon"}>
            <button>Add Marathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myMarathons"}>
            <button>My Marathons</button>
          </NavLink>
          <NavLink to={"/dashboard/myApplies"}>
            <button>My Applies</button>
          </NavLink>
        </div>
        <div className=" w-4/5  ml-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
