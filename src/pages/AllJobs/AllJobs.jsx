import axios from "axios";
import { useEffect, useState } from "react";
import AllJobsCard from "../AllJobsCard/AllJobsCard";
import jobs1 from "../../../public/assets/allJobs/jobs1.jpg";
import jobs2 from "../../../public/assets/allJobs/jobs2.jpg";

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
        <div className="flex items-center justify-between">
          <img className="w-[250px] h-[250px]   rounded-xl" src={jobs1} />
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
