import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" max-w-10/11 md:max-w-9/11 lg:max-w-8/10 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
