import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import reg from "../../assets/reg.json";

const Register = () => {
  const { register, updateUser, googleLogin, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.currentPassword.value;
    const photo = e.target.photoURL.value;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (passwordRegExp.test(password) === false) {
      alert(
        "Password must be at least Six characters includeing  one upper and lower case."
      );
      return;
    }
    register(email, password)
      .then((result) => {
        const users = result.user;
        // console.log(users);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...users, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });

        navigate("/");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register successful",
          showConfirmButton: false,
          timer: 1500,
        });
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
    <div className=" flex border justify-around items-center">
      <Helmet title="Marathon || Registration"></Helmet>

      <div className="card bg-secondary w-full max-w-sm shrink-0 shadow-2xl  mt-20">
        <h2 className=" text-3xl font-bold mx-auto  mt-3 text-primary  text-shadow-lg ">
          Register <span className=" text-black ">Now</span>
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              required
              name="name"
              className="input border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
              placeholder="Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
              placeholder="Email"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              autoComplete="off"
              required
              name="photoURL"
              className="input border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
              placeholder="Photo URL"
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className=" relative">
              <input
                type="password"
                name="currentPassword"
                autoComplete="new-password"
                required
                className="input border-0 border-b-2 bg-secondary rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-primary focus:text-white w-full"
                placeholder="Password"
              />
            </div>

            <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-primary group w-full mt-2">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-accent group-hover:h-full"></span>
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
                Register
              </span>
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-primary text-white  font-semibold py-2.5 hover:bg-accent hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
          </button>
          <p className=" mt-1 ">
            Already have an account ?
            <Link className=" text-blue-500 hover:text-orange-400" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className=" hidden md:block">
        {" "}
        <Lottie
          animationData={reg}
          loop={true}
          className=" w-100 h-100 lg:w-150 lg:h-150"
        />
      </div>
    </div>
  );
};

export default Register;
