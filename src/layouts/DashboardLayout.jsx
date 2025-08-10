import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaHome,
  FaListUl,
  FaPlusCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-primary text-white"
        : "hover:bg-primary/20 text-gray-800"
    }`;

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex h-screen bg-accent overflow-hidden">
        {/* Mobile Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed z-30 inset-y-0 left-0 w-64 bg-secondary shadow-md transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full flex flex-col justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/dashboard/addMarathon"
                  className={linkClasses("/dashboard/addMarathon")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaPlusCircle />
                  Add Marathon
                </Link>
                <Link
                  to="/dashboard/myMarathons"
                  className={linkClasses("/dashboard/myMarathons")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaListUl />
                  My Marathons
                </Link>
                <Link
                  to="/dashboard/myApplies"
                  className={linkClasses("/dashboard/myApplies")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaUser />
                  My Applies
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <button
                className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg font-semibold"
                onClick={() => {
                  alert("Logout clicked");
                }}
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Topbar for Mobile */}
          <div className="md:hidden bg-white shadow p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <button onClick={toggleSidebar}>
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Main Outlet */}
          <main className="flex-1 overflow-y-auto p-6 bg-secondary rounded-lg m-4 md:m-8 shadow-lg">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
