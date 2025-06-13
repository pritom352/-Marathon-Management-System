import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const MarathonRegistration = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, marathonStartDate, _id } = data.data;
  console.log(_id);

  const { user } = useContext(AuthContext);
  // const [registerdcount, setRegisterdCount] = useState(
  //   data?.data.totalRegistrations.includes(user?.email)
  // );
  // console.log("registerd", registerd);
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("hello world");
    const target = e.target;
    const title = target.title.value;
    const startDate = target.startDate.value;
    const email = target.email.value;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const address = target.address.value;
    const number = target.contactNumber.value;
    const data = {
      title,
      startDate,
      firstName,
      lastName,
      email,
      address,
      number,
    };
    axios
      .post("http://localhost:3000/registerdData", data)
      .then((result) => {
        if (result?.data?.acknowledged) {
          axios
            .patch(`http://localhost:3000/totalRegistration/${_id}`, {
              email: user?.email,
            })
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
    <div>
      <form
        onSubmit={handleRegistration}
        className="space-y-4 p-5   rounded-2xl shadow-2xl"
      >
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between gap-5 md:gap-8 lg:gap-16">
          <div className="  w-full">
            {/* Title */}
            <label className="label font-bold">Task Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title || ""}
              disabled
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            />
          </div>
          {/* start date */}
          <div className="  w-full">
            <label className="label font-bold">Start Date</label>
            <input
              type="email"
              name="startDate"
              defaultValue={marathonStartDate || ""}
              disabled
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            />
          </div>
        </div>

        {/* -------------------------------------------- */}
        <div className=" flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-16 justify-between">
          {/* email */}
          <div className=" w-full">
            <label className="label font-bold">email</label>

            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              disabled
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            />
          </div>
          {/* first name */}
          <div className=" w-full">
            <label className="label font-bold">First Name</label>

            <input
              type="text"
              name="firstName"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter Your First Name"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}
        <div className=" flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-16 justify-between">
          {/* last name */}
          <div className=" w-full">
            <label className="label font-bold">Last Name</label>

            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name:"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            />
          </div>
          {/* Address */}
          <div className=" w-full">
            <label className="label font-bold">Address</label>

            <input
              type="Address"
              name="address"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter Your Address"
            />
          </div>
        </div>
        <div className="  flex flex-col mt-6 ">
          <label className="label mx-auto font-bold">Contact Number</label>

          <input
            type="text"
            name="contactNumber"
            className="input border-2 text-center mx-auto  rounded-b-none focus:rounded mt-1 focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white "
            placeholder="Enter Your Number"
          />
        </div>
        <button className="flex mx-auto mt-4 md:mt-7 lg:mt-10 items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default MarathonRegistration;
