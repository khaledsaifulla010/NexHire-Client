import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { DiRequirejs } from "react-icons/di";
import { MdOutlineWorkspacePremium, MdContacts } from "react-icons/md";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = jobDetails;
  console.log(jobDetails);
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">{title}</h1>
            <p className="text-purple-800 text-sm font-semibold">{company}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify">
          {description}
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-1">
            <TbListDetails className="mt-1" /> Job Details
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Location:</strong> {location}
            </li>
            <li>
              <strong>Job Type:</strong> {jobType}
            </li>
            <li>
              <strong>Category:</strong> {category}
            </li>
            <li>
              <strong>Application Deadline:</strong> {applicationDeadline}
            </li>
            <li>
              <strong>Status:</strong> {status}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-1">
            <CiBadgeDollar className="mt-1" /> Salary Range
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            {salaryRange?.salaryMin} - {salaryRange?.salaryMax}
            {salaryRange?.currency.toUpperCase()}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-1">
            <DiRequirejs className="mt-1" /> Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {requirements?.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-1">
            <MdOutlineWorkspacePremium className="mt-1" /> Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {responsibilities?.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-1">
            <MdContacts className="mt-1" /> Contact Information
          </h2>
          <p className="text-gray-700">
            <strong>HR Name:</strong> {hr_name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              {hr_email}
            </a>
          </p>
        </div>

        <Link to={`/newJobApply/${_id}`}>
          <button className="btn w-full py-3 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Apply Now <FaPaperPlane />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
