import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyJobPost = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allJobsOfRecruiter?email=${user.email}`)
      .then((data) => setJobs(data.data));
  }, [user.email]);
  console.log(jobs);

  return (
    <div className="mt-24 mb-72">
      <h1 className="text-5xl text-center font-bold">
        My Total Job Post : {jobs.length}{" "}
      </h1>
      <div>
        {jobs.length > 0 ? (
          <div className="overflow-x-auto mt-20 mb-72 px-8">
            <div className="rounded-lg shadow-lg border border-gray-300">
              <table className="table w-full border-collapse">
                <thead className="bg-gray-700 text-white text-lg font-extrabold">
                  <tr>
                    <th className="text-center py-3 px-4">SL/No.</th>
                    <th className="text-center py-3 px-4">Company Logo</th>
                    <th className="text-center py-3 px-4">Company</th>
                    <th className="text-center py-3 px-4">Job Title</th>
                    <th className="text-center py-3 px-4">
                      Application Deadline
                    </th>
                    <th className="text-center py-3 px-4">Application Count</th>
                    <th className="text-center py-3 px-4">View Application</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {jobs.map((job, index) => (
                    <tr key={job.id} className="hover:bg-gray-100">
                      <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                        {index + 1}
                      </td>
                      <td className="text-center py-3 px-4">
                        <div className="avatar flex justify-center">
                          <div className="mask rounded-full h-16 w-16">
                            <img
                              src={job.company_logo}
                              alt={`${job.company} Logo`}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-3 px-4 text-base text-purple-500 font-bold">
                        {job.company}
                      </td>
                      <td className="text-center py-3 px-4 text-indigo-500 font-bold text-base">
                        {job.title}
                      </td>
                      <td className="text-center py-3 px-4 text-indigo-500 font-bold text-base">
                        {job.applicationDeadline}
                      </td>
                      <td className="text-center py-3 px-4 text-indigo-500 font-bold text-base">
                        {job.applicationCount}
                      </td>
                      <td>
                        <Link to={`/viewApplication/${job._id}`}>
                          <button className="btn btn-link">
                            View Application
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
            No Posted Jobs History!
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyJobPost;
