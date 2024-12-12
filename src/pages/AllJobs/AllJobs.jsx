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
    <div className="mt-24 mb-72">
      <h1 className="text-center font-bold text-5xl">
        Total Jobs : {jobs.length}
      </h1>
      <div className="grid grid-cols-3 gap-y-12 mt-16 justify-center ml-8">
        {jobs.map((job) => (
          <AllJobsCard key={job._id} job={job}></AllJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
