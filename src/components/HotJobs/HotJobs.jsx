import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HotJobsCard from "../HotJobsCard/HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://nex-hire-server.vercel.app/hotJobs")
      .then((data) => setJobs(data.data));
  }, []);

  return (
    <div className="mt-24 ">
      <div>
        <h1 className="font-black text-4xl text-center text-purple-950">
          Jobs of the day
        </h1>
        <p className="text-center mt-2 text-lg font-semibold text-slate-500">
          Quickly Discover and Connect with Top Talent Effortlessly.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-12 mt-16 justify-center ml-8">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
