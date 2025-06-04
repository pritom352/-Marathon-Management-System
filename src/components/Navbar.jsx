import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Marathons</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className=" border w-[50px] rounded-2xl" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              className=" w-[50px] rounded-full mr-2"
              src={user?.photoURL}
              alt=""
            />
            <button
              onClick={handleLogout}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
              <span className="relative">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                <span className="relative">Login</span>
              </button>
            </Link>
            <Link to="/register">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                <span className="relative">Register</span>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
