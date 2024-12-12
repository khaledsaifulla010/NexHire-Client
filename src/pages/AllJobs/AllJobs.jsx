import axios from "axios";
import { useState } from "react";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  axios.get("http://localhost:5000/allJobs").then((data) => setJobs(data.data));
  return (
    <div className="mt-24 mb-72">
      <h1 className="text-center font-bold text-5xl">
        Total Jobs : {jobs.length}{" "}
      </h1>
    </div>
  );
};

export default AllJobs;
