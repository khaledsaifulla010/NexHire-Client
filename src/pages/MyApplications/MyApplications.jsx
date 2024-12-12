import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { h1 } from "motion/react-client";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/job_application?email=${user.email}`)
      .then((data) => setJobs(data.data));
  }, [user.email]);

  return (
    <div>
      <h1 className="font-bold text-5xl text-center mt-24">
        My Applications : {jobs.length}
      </h1>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
          No Application History!
        </h1>
      )}
    </div>
  );
};

export default MyApplications;
