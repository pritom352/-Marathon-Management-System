import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import loginAnimetion from "../../assets/login.json";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    login(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className=" flex mt-20 justify-around items-center">
      <div className="card  bg-secondary w-full max-w-sm shrink-0  shadow-2xl ">
        <Helmet title="Marathon || Login"></Helmet>

        <h2 className=" text-3xl flex  font-bold mx-auto  mt-3 text-primary  text-shadow-lg ">
          Login <span className=" text-black ">Now</span>
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>

            <input
              type="email"
              required
              name="email"
              className="input border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="current-password"
              required
              name="password"
              className="input  border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-primary group w-full mt-2"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-accent  group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>

              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Login
              </span>
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-secondary text-white  font-semibold py-2.5 hover:bg-accent hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
          </button>
          <p className=" mt-1 ">
            Already have an account ?
            <Link
              className=" text-blue-500 hover:text-orange-400"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className=" hidden md:block ">
        <Lottie
          animationData={loginAnimetion}
          loop={true}
          className="w-100 h-100 lg:w-150 lg:h-150"
        />
      </div>
    </div>
  );
};

export default Login;
