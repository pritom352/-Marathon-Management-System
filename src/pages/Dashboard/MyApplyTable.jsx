import axios from "axios";

import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const MyApplyTable = ({
  myApply,
  myApplies,
  setMyApplies,
  index,
  MyApplyUpdate,
}) => {
  const navigate = useNavigate();
  const {
    title,
    startDate,
    firstName,
    lastName,
    number,
    email,
    address,
    _id,
    marathonID,
  } = myApply;
  const { user } = useContext(AuthContext);

  const handleRegistrationUpdate = (e) => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const startDate = target.startDate.value;
    const email = target.email.value;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const address = target.address.value;
    const number = target.contactNumber.value;
    if (number.length != 11) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Number must be 11 number's`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
      .put(`https://assignmein11.vercel.app/registerdData/${_id}`, data)
      .then((result) => {
        if (result.data.modifiedCount) {
          MyApplyUpdate();
          document.getElementById(`${myApply?._id}`).close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myApplies");
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
        fetch(`https://assignmein11.vercel.app/registerdData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              const newData = myApplies.filter((data) => data._id !== id);
              setMyApplies(newData);
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
            axios
              .patch(
                `https://assignmein11.vercel.app/removeTotalRegistration/${marathonID}`,
                {
                  email: user?.email,
                }
              )
              .then((result) => {})
              .catch((error) => {});
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
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{title}</td>
      <td className="text-center">{startDate}</td>
      <td className="text-center">
        {firstName} {lastName}
      </td>

      <td className="text-center">{number}</td>
      <td className=" flex gap-5">
        <button
          onClick={() => document.getElementById(`${_id}`).showModal()}
          className="flex mx-auto  items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none"
        >
          Update
        </button>
        <dialog id={`${_id}`} className="modal">
          <div className="modal-box w-3/5">
            <h2 className="text-2xl text-center mb-10">
              Update registration details
            </h2>
            <form onSubmit={handleRegistrationUpdate}>
              <div className=" flex flex-col md:flex-row lg:flex-row justify-between gap-5 md:gap-8 lg:gap-16">
                <div className="  w-full">
                  {/* Title */}
                  <label className="label font-bold">Task Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    disabled
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
                  />
                </div>
                {/* start date */}
                <div className="  w-full">
                  <label className="label font-bold">Start Date</label>
                  <input
                    type="email"
                    name="startDate"
                    defaultValue={startDate}
                    disabled
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
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
                    defaultValue={email}
                    disabled
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
                  />
                </div>
                {/* first name */}
                <div className=" w-full">
                  <label className="label font-bold">First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    defaultValue={firstName}
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
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
                    defaultValue={lastName}
                    placeholder="Enter Your Last Name:"
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
                  />
                </div>
                {/* Address */}
                <div className=" w-full">
                  <label className="label font-bold">Address</label>

                  <input
                    type="Address"
                    name="address"
                    defaultValue={address}
                    className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white w-full"
                    placeholder="Enter Your Address"
                  />
                </div>
              </div>
              <div className="  flex flex-col mt-6 ">
                <label className="label mx-auto font-bold">
                  Contact Number
                </label>

                <input
                  type="text"
                  defaultValue={number}
                  name="contactNumber"
                  className="input border-2 text-center mx-auto  rounded-b-none focus:rounded mt-1 focus:border-2 focus:border-blue-500  font-semibold focus:bg-blue-300 focus:text-white "
                  placeholder="Enter Your Number"
                />
              </div>
              <button className="flex mx-auto mt-4 md:mt-7 lg:mt-10 items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
                Update Task
              </button>
            </form>
          </div>
          <form
            method="dialog"
            className="modal-backdrop  w-full mx-auto space-y-4 p-5   rounded-2xl shadow-2xl"
          >
            <button>close</button>
          </form>
        </dialog>
        {/* <button
          onClick={() => handleDelete(_id)}
          className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Delete</span>
        </button> */}
        <button
          onClick={() => handleDelete(_id)}
          className="flex mx-auto  items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-base-100 border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyApplyTable;
