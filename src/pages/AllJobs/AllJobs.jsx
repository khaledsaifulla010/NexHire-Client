import axios from "axios";
import { useEffect, useState } from "react";
import AllJobsCard from "../AllJobsCard/AllJobsCard";
import jobs1 from "../../../public/assets/allJobs/jobs1.jpg";
import jobs2 from "../../../public/assets/allJobs/jobs2.jpg";
import { FaBriefcase } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Location from "../../components/Location/Location";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allJobs")
      .then((data) => setJobs(data.data));
  }, []);
  return (
    <div className="mt-16 mb-72">
      <div className="w-full h-[400px] border border-purple-100 bg-purple-50 rounded-xl">
        <h1 className="text-center font-bold text-purple-950 text-4xl py-10">
          <span className="text-purple-700 font-extrabold">
            {jobs.length} Jobs
          </span>{" "}
          Available Now
        </h1>
        <p className="text-center text-xl font-bold text-slate-400 -mt-8">
          Discover your dream job with NexHire.
        </p>
        <div className="flex items-center justify-between mt-8">
          <img className="w-[250px] h-[250px]   rounded-xl" src={jobs1} />
          <div className="flex h-[100px] border rounded-xl items-center p-2 bg-white gap-4  w-[900px] justify-between border-base-200 shadow-xl absolute ml-[275px]">
            {/* Industry */}
            <div className="relative">
              <FaBriefcase className="text-xl absolute mt-4 ml-4 text-purple-800" />
              <select className="select  w-[220px] text-center text-base text-slate-600">
                <option selected className="text-center text-lg text-slate-500">
                  Industry
                </option>
                <option className="text-center text-lg text-slate-500">
                  Software
                </option>
                <option className="text-center text-lg text-slate-500">
                  Development
                </option>
                <option className="text-center text-lg text-slate-500">
                  Finance
                </option>
                <option className="text-center text-lg text-slate-500">
                  Management
                </option>
              </select>
            </div>
            {/* Location */}
            <div>
              <Location></Location>
            </div>
            {/* Keywords */}
            <div className="relative">
              <TbGridDots className="text-xl absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 " />
              <input
                className="text-lg  rounded-md pl-12 pr-4 py-2 w-full "
                type="text"
                placeholder="Keyword"
              />
            </div>
            {/* Button */}

            <button className="p-2 border rounded-xl font-semibold text-lg flex items-center gap-1 bg-purple-900 text-white border-purple-950 shadow-2xl">
              <FaSearch className="mt-1" /> Search
            </button>
          </div>
          <img className="w-[250px] h-[250px]  rounded-xl" src={jobs2} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-12 mt-16 justify-center ml-8">
        {jobs.map((job) => (
          <AllJobsCard key={job._id} job={job}></AllJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
