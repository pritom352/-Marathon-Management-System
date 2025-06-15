import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";

const AddMarathon = () => {
  const { user } = useContext(AuthContext);
  const [startRegistration, setStartRegistration] = useState(null);
  const [endRegistration, setEndRegistration] = useState(null);
  const [startDate, setStartDate] = useState(null);
  console.log(startDate);

  const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth();
  // const year = date.getFullYear();
  // const today = `${day}/${month + 1}/${year}`;
  // console.log(day, month, year);
  // const [createdAt, setCreatedAt] = useState(today);
  const handleAddMarathon = (e) => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const registrationStartDate = startRegistration.toLocaleDateString("en-GB");
    const registrationEndDate = endRegistration.toLocaleDateString("en-GB");
    const marathonStartDate = startDate.toLocaleDateString("en-GB");
    console.log(marathonStartDate);

    const location = target.location.value;
    const distance = target.distance.value;
    const description = target.description.value;
    const image = target.image.value;
    const email = target.email.value;

    const createdAt = target.createdAt.value;
    console.log(registrationStartDate);

    const totalRegistrations = [];

    const marathon = {
      title,
      registrationStartDate,
      registrationEndDate,
      marathonStartDate,
      location,
      distance,
      description,
      image,
      createdAt,
      totalRegistrations,
      email,
    };
    axios
      .post("http://localhost:3000/data", marathon)
      .then((result) => {
        if (result?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
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
    console.log(marathon);
  };

  return (
    <div className=" md:px-10 py-15  lg:px-30 lg:py-20 bg-white ">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-8 font-bold italic text-center text-blue-500">
        Add <span className=" text-black">Task</span>
      </h1>
      <form
        onSubmit={handleAddMarathon}
        className="space-y-4 p-5   rounded-2xl shadow-2xl"
      >
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between gap-5 md:gap-8 lg:gap-16">
          <div className="  w-full">
            {/* Title */}
            <label className="label font-bold">Task Title</label>
            <input
              type="text"
              required
              name="title"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter Title Name"
            />
          </div>
          {/* location */}
          <div className="  w-full">
            <label className="label font-bold">Location</label>
            <input
              type="text"
              required
              name="location"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter Location"
            />
          </div>
        </div>
        {/* Description */}
        <div className=" mb-5 md:mb-8 lg:mb-12">
          <label className="label font-bold">Description</label>

          <textarea
            name="description"
            required
            className="textarea  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Description"
          ></textarea>
        </div>
        <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
          <div className="w-full">
            {/* Running Distance */}
            <label className="label font-bold">Running Distance</label>
            <select
              name="distance"
              required
              defaultValue=""
              className="select validator border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            >
              <option value="" disabled></option>
              <option value="25 KM">25 KM</option>
              <option value="10 KM">10 KM</option>
              <option value="3 KM">3 KM</option>
            </select>
            <p className="validator-hint">Required</p>
          </div>
          {/* Marathon Image */}
          <div className=" w-full">
            <label className="label font-bold">Marathon Image</label>

            <input
              type="url"
              required
              name="image"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter image URL"
            />
          </div>
        </div>
        {/* ------------------------------------------- */}

        <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
          {/* Start Registration */}
          <div className=" w-full  flex flex-col gap-3 ">
            <label className="label font-bold"> Start Registration</label>
            <DatePicker
              className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              selected={startRegistration}
              onChange={(date) => setStartRegistration(date)}
              // name="registrationStartDate"
            />
          </div>
          {/*  End Registration */}
          <div className=" w-full  flex flex-col gap-3 ">
            <label className="label font-bold">End Registration</label>
            <DatePicker
              className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              selected={endRegistration}
              onChange={(date) => setEndRegistration(date)}
              // name="registrationEndDate"
            />
          </div>
        </div>
        {/* -------------------------------------------- */}
        {/* ------------------------------------------- */}
        <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
          {/* Marathon Start Date */}
          <div className=" w-full  flex flex-col gap-3 ">
            <label className="label font-bold">Marathon Start Date</label>
            <DatePicker
              className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              // name="marathonStartDate"
            />
          </div>
          {/* Created At   */}
          <div className=" w-full  flex flex-col gap-3 ">
            <label className="label font-bold">Created At</label>
            <DatePicker
              name="createdAt"
              className="border-0 border-b-1 rounded-b-none  text-black font-semibold  w-full"
              selected={date}
              disabled
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
              placeholder="Your Email"
            />
          </div>
          {/* name */}
          <div className=" w-full">
            <label className="label font-bold">name</label>

            <input
              type="text"
              disabled
              defaultValue={user?.displayName || ""}
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Your Name"
            />
          </div>
        </div>
        <button className="flex mx-auto mt-4 md:mt-7 lg:mt-10 items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;
