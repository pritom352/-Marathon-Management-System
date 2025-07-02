import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col   bg-accent  ">
      <Navbar />

      <main className="flex  flex-col  md:flex-row flex-grow gap-8 justify-center items-start max-w-7xl mx-auto px-4 my-20 ">
        {/* Sidebar */}
        <nav className="flex md:flex-col  gap-6 md:sticky top-20 self-start bg-secondary shadow-lg rounded-lg p-1 md:p-6 w-auto mx-auto md:w-48">
          <NavLink
            to="/dashboard/addMarathon"
            className={({ isActive }) =>
              `text-center py-2 rounded-md font-semibold transition-colors ${
                isActive ? "bg-primary text-white" : " hover:bg-accent "
              }`
            }
          >
            Add Marathons
          </NavLink>
          <NavLink
            to="/dashboard/myMarathons"
            className={({ isActive }) =>
              `text-center py-2 rounded-md font-semibold transition-colors ${
                isActive ? "bg-primary text-white" : " hover:bg-accent "
              }`
            }
          >
            My Marathons
          </NavLink>
          <NavLink
            to="/dashboard/myApplies"
            className={({ isActive }) =>
              `text-center py-2 rounded-md font-semibold transition-colors ${
                isActive ? "bg-primary text-white" : " hover:bg-accent "
              }`
            }
          >
            My Applies
          </NavLink>
        </nav>

        {/* Content */}
        <section className="flex-grow flex-1  bg-secondary shadow-lg  rounded-lg p-8 pt-0 min-h-[60vh]">
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
