import axios from "axios";
import { useEffect, useState } from "react";
import AllJobsCard from "../AllJobsCard/AllJobsCard";
import jobs1 from "../../../public/assets/allJobs/jobs1.jpg";
import jobs2 from "../../../public/assets/allJobs/jobs2.jpg";
import { FaBriefcase } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Location from "../../components/Location/Location";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [showCount, setShowCount] = useState("All");
  // const totalJobsCount = useLoaderData()
  const { count } = useLoaderData();
  console.log(count);

  useEffect(() => {
    axios
      .get("https://nex-hire-server.vercel.app/allJobs")
      .then((data) => setJobs(data.data));
  }, []);

  const toggleGrid = () => {
    setIsGridView(true);
  };

  const toggleList = () => {
    setIsGridView(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setShowCount(value === "All" ? "All" : parseInt(value));
  };
  const displayedJobs = showCount === "All" ? jobs : jobs.slice(0, showCount);

  return (
    <div className="mt-16 mb-72">
      <div className="w-full h-[400px] border border-purple-100 bg-purple-50 rounded-xl">
        <h1 className="text-center font-bold text-purple-950 text-5xl py-10">
          <span className="text-purple-700 font-extrabold">
            {jobs.length} Jobs
          </span>{" "}
          Available Now
        </h1>
        <p className="text-center text-xl font-bold text-slate-400 -mt-8">
          Discover your dream job with NexHire.
        </p>
        <div className="flex items-center justify-between mt-6">
          <img className="w-[250px] h-[250px] rounded-xl" src={jobs1} />
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
                className="text-lg rounded-md pl-12 pr-4 py-2 w-full"
                type="text"
                placeholder="Keyword"
              />
            </div>
            {/* Button */}
            <button className="p-2 border rounded-xl font-semibold text-lg flex items-center gap-1 bg-purple-900 text-white border-purple-950 shadow-2xl mr-4 w-28 ">
              <FaSearch className="mt-1 ml-2" /> Search
            </button>
          </div>
          <img className="w-[250px] h-[250px]  rounded-xl" src={jobs2} />
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <div>
          <div className="w-[300px]">
            {/* div1 */}
            <div>
              <div className="flex items-center justify-between ">
                <h1 className="font-bold text-2xl">Advance Filter</h1>
                <button className="border px-2 mt-1 rounded-xl font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-500 text-center py-1">
                  Reset
                </button>
              </div>
              <div className="divider"></div>
            </div>
            <div className="w-full border h-[1190px]"></div>
          </div>
        </div>

        <div className="w-[1100px] -mt-1">
          <div>
            <div className="flex items-center justify-between">
              {/* div1 */}
              <div className="mr-[650px]">
                <h1 className="font-medium text-slate-500 text-xl">
                  Showing {showCount} of {jobs.length} jobs
                </h1>
              </div>
              {/* div2 */}
              <div className="relative border rounded-xl w-[135px]  flex items-center justify-between p-2 mr-4">
                <h1 className="text-purple-800 font-semibold text-base">
                  Show:
                </h1>
                <select
                  value={showCount}
                  onChange={handleChange}
                  className="w-[65px] text-center text-base text-slate-600  bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none"
                >
                  <option className="text-center text-lg text-slate-500">
                    All
                  </option>
                  <option className="text-center text-lg text-slate-500">
                    2
                  </option>
                  <option className="text-center text-lg text-slate-500">
                    4
                  </option>
                  <option className="text-center text-lg text-slate-500">
                    6
                  </option>
                </select>
              </div>

              {/* div3 */}
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleGrid}
                  className={`p-2 rounded-xl ${
                    isGridView
                      ? "bg-purple-900 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <BsFillGridFill />
                </button>
                <button
                  onClick={toggleList}
                  className={`p-2 rounded-xl ${
                    !isGridView
                      ? "bg-purple-900 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <FaThList />
                </button>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          {/* Jobs Display */}
          <div
            className={
              isGridView
                ? "grid grid-cols-2 gap-y-12 gap-x-10 mt-12"
                : "grid grid-cols-1 gap-y-12 mt-12 "
            }
          >
            {displayedJobs.map((job) => (
              <AllJobsCard
                key={job._id}
                job={job}
                isGridView={isGridView}
              ></AllJobsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
