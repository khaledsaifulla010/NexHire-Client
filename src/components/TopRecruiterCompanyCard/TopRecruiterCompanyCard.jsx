import React from "react";
import { IoLocation } from "react-icons/io5";
const TopRecruiterCompanyCard = ({ recruiter }) => {
  const { logo, name, ratingCount, location, openJobs } = recruiter;

  return (
    <div className="w-[340px] h-[140px]  bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4 p-4">
        {/* Logo */}
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-50 rounded-lg">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="w-8 h-8 object-contain"
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          {/* Company Name */}
          <h2 className="text-lg font-bold text-purple-900">{name}</h2>

          {/* Ratings */}
          <div className="flex items-center space-x-2">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="text-sm font-medium text-gray-400">
              ({ratingCount})
            </span>
          </div>
          {/* Location and Open Jobs */}
        </div>
      </div>
      <div className="flex justify-around text-gray-400 text-sm  gap-16">
        <span className="flex items-center font-semibold gap-0.5">
          <IoLocation className="mt-0.5" /> {location}
        </span>
        <span className="font-medium text-gray-400">{openJobs} Open Jobs</span>
      </div>
    </div>
  );
};

export default TopRecruiterCompanyCard;
