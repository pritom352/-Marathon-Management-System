import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyMarathonTable = ({
  data,
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
    distance,
    description,
    image,
    createdAt,
    totalRegistrations,
    email,
  } = data;

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
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{title}</td>
      <td className="text-center">{registrationStartDate}</td>
      <td className="text-center">{registrationEndDate}</td>
      <td className="text-center">{totalRegistrations}</td>
      <td className="text-center">
        <div className="flex gap-5">
          <Link to={`/updateTask/${data._id}`}>
            <button className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Update</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(data._id)}
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
