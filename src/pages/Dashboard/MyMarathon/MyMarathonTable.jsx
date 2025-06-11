import React, { useContext, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const MyMarathonTable = ({
  myMarathon,
  index,
  setMyMarathonList,
  myMarathonList,
}) => {
  const {
    title,
    registrationStartDate,
    registrationEndDate,
    marathonStartDate,
    location,
    // distance,
    description,
    image,
    // createdAt,
    totalRegistrations,
    // email,
  } = myMarathon;
  console.log(myMarathon);
  const total = totalRegistrations;
  console.log(registrationStartDate);
  const { user } = useContext(AuthContext);
  const [startRegistration, setStartRegistration] = useState(null);
  const [endRegistration, setEndRegistration] = useState(null);
  // const [updateMarathonStartDate, setUpdateMarathonStartDate] = useState(null);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${day}/${month + 1}/${year}`;
  console.log(day, month, year);
  const [updateCreatedAt, setupdateCreatedAt] = useState(today);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/allData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              console.log(myMarathonList);

              const newData = myMarathonList.filter((data) => data._id !== id);
              setMyMarathonList(newData);
            }
          });
      }
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const registrationStartDate = target.registrationStartDate.value;
    const registrationEndDate = target.registrationEndDate.value;
    const marathonStartDate = target.marathonStartDate.value;
    const location = target.location.value;
    const distance = target.distance.value;
    const description = target.description.value;
    const image = target.image.value;
    const email = target.email.value;

    const createdAt = target.createdAt.value;

    const totalRegistrations = `${total}`;

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
      .put(`http://localhost:3000/allData/${myMarathon._id}`, marathon)
      .then((result) => {
        if (result?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      });
  };
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{title}</td>
      <td className="text-center">{registrationStartDate}</td>
      <td className="text-center">{registrationEndDate}</td>
      <td className="text-center">{totalRegistrations}</td>
      <td className="text-center">
        <div className="flex gap-5">
          <button
            className=" btn px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
            onClick={() =>
              document.getElementById(`${myMarathon?._id}`).showModal()
            }
          >
            open modal
          </button>
          <dialog id={myMarathon?._id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Update Marathon</h3>

              <div className="modal-action  w-full">
                <form
                  onSubmit={handleUpdate}
                  className="space-y-4 p-5 w-full  rounded-2xl shadow-2xl"
                >
                  <div className=" flex flex-col md:flex-row lg:flex-row justify-between gap-5 md:gap-8 lg:gap-16">
                    <div className="  w-full">
                      {/* Title */}
                      <label className="label font-bold">Task Title</label>
                      <input
                        type="text"
                        value={myMarathon?.title}
                        required
                        name="title"
                        className="input cursor-not-allowed border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                        placeholder="Enter Title Name"
                      />
                    </div>
                    {/* location */}
                    <div className="  w-full">
                      <label className="label font-bold">Location</label>
                      <input
                        type="text"
                        defaultValue={location}
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
                      defaultValue={description}
                      required
                      className="textarea  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
                    <div className="w-full">
                      {/* Running Distance */}
                      <label className="label font-bold">
                        Running Distance
                      </label>
                      <select
                        name="distance"
                        defaultValue={description}
                        required
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
                        defaultValue={image}
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
                      <label className="label font-bold">
                        {" "}
                        Start Registration
                      </label>
                      <DatePicker
                        className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                        value={registrationStartDate}
                        selected={startRegistration}
                        onChange={(date) => setStartRegistration(date)}
                        name="registrationStartDate"
                      />
                      {/* <DatePicker
                        placeholderText="update your Date"
                        className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                        selected={startRegistration}
                        onChange={(date) => setStartRegistration(date)}
                        name="registrationStartDate"
                      /> */}
                    </div>
                    {/*  End Registration */}
                    <div className=" w-full  flex flex-col gap-3 ">
                      <label className="label font-bold">
                        End Registration
                      </label>
                      <DatePicker
                        placeholderText="update your Date"
                        className="border-0 border-b-1 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                        selected={endRegistration}
                        onChange={(date) => setEndRegistration(date)}
                        name="registrationEndDate"
                      />
                    </div>
                  </div>
                  {/* -------------------------------------------- */}
                  {/* ------------------------------------------- */}
                  <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
                    {/* Marathon Start Date */}
                    <div className=" w-full  flex flex-col gap-3 ">
                      <label className="label font-bold">
                        Marathon Start Date
                      </label>
                      <input
                        type="text"
                        value={marathonStartDate}
                        // disabled
                        name="location"
                        className="input cursor-not-allowed border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                        placeholder="Enter Location"
                      />
                    </div>
                    {/* Created At   */}
                    <div className=" w-full  flex flex-col gap-3 ">
                      <label className="label font-bold">Created At</label>
                      <DatePicker
                        name="createdAt"
                        className="border-0 border-b-1 rounded-b-none  text-black font-semibold  w-full"
                        selected={updateCreatedAt}
                        disabled
                        onChange={(date) => setupdateCreatedAt(date)}
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
            </div>
          </dialog>

          <button
            onClick={() => handleDelete(myMarathon._id)}
            className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyMarathonTable;
