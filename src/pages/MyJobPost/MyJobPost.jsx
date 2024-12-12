import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyJobPost = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allJobs?email=${user.email}`)
      .then((data) => setJobs(data.data));
  }, [user.email]);
  console.log(jobs);

  return (
    <div className="mt-24 mb-72">
      <h1 className="text-5xl text-center font-bold">
        My Total Job Post : {jobs.length}{" "}
      </h1>
    </div>
  );
};

export default MyJobPost;
