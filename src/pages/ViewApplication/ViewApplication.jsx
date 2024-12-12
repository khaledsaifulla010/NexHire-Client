import { useLoaderData } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import axios from "axios";

const ViewApplication = () => {
  const applicants = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    axios
      .patch(`http://localhost:5000/job_application/${id}`, data)
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <div className="mt-24 mb-72">
      <h1 className="text-center font-bold text-5xl">
        Total Applications: {applicants.length}
      </h1>

      {applicants.length === 0 ? (
        <h2 className="text-center text-xl text-gray-500 mt-8">
          No applicants found.
        </h2>
      ) : (
        <div className="overflow-x-auto mt-8">
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-700 text-white text-lg font-extrabold">
                <tr>
                  <th className="text-center py-3 px-4">SL/No.</th>
                  <th className="text-center py-3 px-4">Email</th>
                  <th className="text-center py-3 px-4">LinkedIn</th>
                  <th className="text-center py-3 px-4">GitHub</th>
                  <th className="text-center py-3 px-4">Resume</th>
                  <th className="text-center py-3 px-4">Status</th>
                  <th className="text-center py-3 px-4">Update Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {applicants.map((applicant, index) => (
                  <tr key={applicant._id} className="hover:bg-gray-100">
                    <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                      {index + 1}
                    </td>
                    <td className="text-center py-3 px-4 text-base text-purple-500 font-bold">
                      <a href={`mailto:${applicant.applicant_email}`}>
                        {applicant.applicant_email}
                      </a>
                    </td>
                    <td className="text-center py-3 px-4 text-blue-500 font-bold text-base">
                      <a
                        href={applicant.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </td>
                    <td className="text-center py-3 px-4 font-bold text-base">
                      <a
                        href={applicant.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    </td>
                    <td className="text-center py-3 px-4 text-indigo-500 font-bold text-base">
                      <a
                        href={applicant.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <HiDocument className="text-2xl" />
                      </a>
                    </td>
                    <td>
                      <select
                        onChange={(e) => handleStatusUpdate(e, applicant._id)}
                        defaultValue={applicant.status || "Change Status"}
                        className="select select-bordered select-xs w-full max-w-xs"
                      >
                        <option disabled>Change Status</option>
                        <option>Under Review</option>
                        <option>Set Review</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewApplication;