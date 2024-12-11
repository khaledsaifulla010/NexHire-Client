import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllJobsCard from "../AllJobsCard/AllJobsCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => setJobs(data.data));
  }, []);

  return (
    <div className="mt-24 mb-72">
      <div>
        <h1 className="font-black text-4xl text-center">Jobs of the day</h1>
        <p className="text-center mt-2 text-lg font-semibold text-slate-500">
          Quickly Discover and Connect with Top Talent Effortlessly.
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <AllJobsCard key={job._id} job={job}></AllJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
