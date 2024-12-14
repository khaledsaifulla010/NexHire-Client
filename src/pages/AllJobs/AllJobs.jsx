import axios from "axios";
import { useEffect, useState } from "react";
import AllJobsCard from "../AllJobsCard/AllJobsCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allJobs")
      .then((data) => setJobs(data.data));
  }, []);
  return (
    <div className="mt-16 mb-72">
      <div className="w-full h-[300px] border-2 bg-purple-50 rounded-xl">
        <h1 className="text-center font-bold text-purple-950 text-3xl py-8">
          <span className="text-purple-700 font-extrabold">
            {jobs.length} Jobs
          </span>{" "}
          Available Now
        </h1>
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
