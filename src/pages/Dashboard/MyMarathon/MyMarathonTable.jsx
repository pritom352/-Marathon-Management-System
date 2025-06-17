import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
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
  getMyMarathons,
}) => {
  const total = myMarathon?.totalRegistrations;
  // console.log(myMarathon);
  const { user } = useContext(AuthContext);
  const [startRegistration, setStartRegistration] = useState(
    new Date(myMarathon?.registrationStartDate?.split("/").reverse().join("/"))
  );

  const [endRegistration, setEndRegistration] = useState(
    new Date(myMarathon?.registrationEndDate?.split("/").reverse().join("/"))
  );
  const [updateMarathonStartDate, setUpdateMarathonStartDate] = useState(
    new Date(myMarathon?.marathonStartDate?.split("/").reverse().join("/"))
  );

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
        fetch(`https://assignmein11.vercel.app/allData/${id}`, {
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

              const newData = myMarathonList.filter((data) => data._id !== id);
              setMyMarathonList(newData);
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
      }
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const target = e.target;
    const title = target.title.value;
    const registrationStartDate = startRegistration.toLocaleDateString("en-GB");
    const registrationEndDate = endRegistration.toLocaleDateString("en-GB");
    const marathonStartDate =
      updateMarathonStartDate.toLocaleDateString("en-GB");
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
      .put(
        `https://assignmein11.vercel.app/allData/${myMarathon._id}`,
        marathon
      )
      .then((result) => {
        if (result?.data?.acknowledged) {
          getMyMarathons();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successfull",
            showConfirmButton: false,
            timer: 1500,
          });

          e.target.reset();
          document.getElementById(`${myMarathon?._id}`).close();
        }
        // console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(error);
      });
  };
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{myMarathon?.title}</td>
      <td className="text-center">{myMarathon?.registrationStartDate}</td>
      <td className="text-center">{myMarathon?.registrationEndDate}</td>
      <td className="text-center">{myMarathon?.totalRegistrations.length}</td>
      <td className="text-center">
        <div className="flex gap-5">
          <button
            onClick={() =>
              document.getElementById(`${myMarathon?._id}`).showModal()
            }
            className="flex mx-auto   items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none"
          >
            Update
          </button>
          <dialog id={`${myMarathon?._id}`} className="modal  w-full">
            <div className="modal-box w-4/5">
              <h3 className="font-bold text-lg">Hello!</h3>
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
                      defaultValue={myMarathon?.title}
                      required
                      name="title"
                      className="input  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
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
                      className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
                      placeholder="Enter Location"
                    />
                  </div>
                </div>
                {/* Description */}
                <div className=" mb-5 md:mb-8 lg:mb-12">
                  <label className="label font-bold">Description</label>

                  <textarea
                    name="description"
                    defaultValue={myMarathon?.description}
                    required
                    className="textarea  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
                  <div className="w-full">
                    {/* Running Distance */}
                    <label className="label font-bold">Running Distance</label>
                    <select
                      name="distance"
                      defaultValue={myMarathon?.distance}
                      required
                      className="select validator border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
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
                      defaultValue={myMarathon?.image}
                      required
                      name="image"
                      className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>
                {/* ------------------------------------------- */}

                <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
                  {/* Start Registration */}
                  <div className=" w-full  flex flex-col gap-3 ">
                    <label className="label font-bold">
                      Start Registration
                    </label>
                    <DatePicker
                      selected={startRegistration}
                      onChange={(date) => setStartRegistration(date)}
                      // name="registrationStartDate"
                    />
                  </div>
                  {/*  End Registration */}
                  <div className=" w-full  flex flex-col gap-3 ">
                    <label className="label font-bold">End Registration</label>
                    <DatePicker
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
                    <label className="label font-bold">
                      Marathon Start Date
                    </label>
                    <DatePicker
                      selected={updateMarathonStartDate}
                      onChange={(date) => setUpdateMarathonStartDate(date)}
                      // name="registrationEndDate"
                    />
                  </div>
                  {/* Created At   */}
                  <div className=" w-full  flex flex-col gap-3 ">
                    <label className="label font-bold">Created At</label>
                    <DatePicker
                      name="createdAt"
                      className="border-0 border-b-1 rounded-b-none     font-semibold  w-full"
                      selected={myMarathon?.createdAt}
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
                      className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
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
                      className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500    font-semibold focus:bg-blue-300 focus:text-white w-full"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <button className="flex mx-auto  md:mt-7 lg:mt-10 items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
                  Update Task
                </button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <button
            onClick={() => handleDelete(myMarathon._id)}
            className="flex mx-auto  items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyMarathonTable;
