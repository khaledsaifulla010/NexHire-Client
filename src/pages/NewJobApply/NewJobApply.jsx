import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const NewJobApply = () => {
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const redirect = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/allJobs")
      .then((response) => setJobs(response.data));
  }, []);

  const selectedJob = jobs.find((job) => job._id === id);

  const handleNewJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;

    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // Prepare the application data
    const newJobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
      title: selectedJob?.title,
      company: selectedJob?.company,
      company_logo: selectedJob?.company_logo,
    };

    axios
      .post("http://localhost:5000/job_applications", newJobApplication)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Application Submitted Successfully", {
            position: "top-left",
          });
          redirect("/myApplications");
        }
      });
  };

  return (
    <div className="mt-24 mb-72">
      <div className="card bg-base-200 border max-w-[800px]  mx-auto">
        <form className="card-body" onSubmit={handleNewJobApplication}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="Enter Your LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Enter Your Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Enter Your Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJobApply;
