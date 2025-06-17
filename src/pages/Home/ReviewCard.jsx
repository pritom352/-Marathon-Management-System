import React from "react";

const ReviewCard = ({ data }) => {
  const { name, image, review, marathon } = data;

  return (
    <div className="rounded-2xl ml-5 my-10 w-[250px] lg:w-[300px] min-h-[300px] lg:min-h-[300px]  shadow-2xl text-center relative flex flex-col px-4 pt-12 pb-5">
      <img
        className="bg-base-100 p-1 h-16 w-16 rounded-full absolute left-1/2 -top-6 transform -translate-x-1/2 object-cover"
        src={image}
        alt={name}
      />

      <h2 className="font-bold italic mt-2">{name}</h2>
      <h3 className="text-sm text-gray-600 mb-2">Marathon: {marathon}</h3>

      <div className="flex-grow flex items-center">
        <p className="bg-base-100 px-0 py-2 rounded-2xl shadow-inner w-full text-sm leading-relaxed">
          {review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
