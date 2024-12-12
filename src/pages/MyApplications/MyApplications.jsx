import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/job_application?email=${user.email}`)
      .then((data) => setJobs(data.data));
  }, [user.email]);

  

  return (
    <div className="mt-24 mb-72">
      <h1 className="font-bold text-4xl text-center">My Applications : {jobs.length} </h1>
    </div>
  );
};

export default MyApplications;
