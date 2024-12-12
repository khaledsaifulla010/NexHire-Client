const AddJobs = () => {
  return (
    <div className="mt-24 mb-72">
      <h1>AddJobs</h1>
      <div className="card bg-base-100 max-w-[800px] mx-auto border shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Post a Job</h2>

          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter job title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select name="jobType" className="select select-bordered" required>
              <option value="" disabled selected>
                Select job type
              </option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              className="input input-bordered"
              required
            />
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* Salary Range */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                name="salaryMin"
                placeholder="Min salary"
                className="input input-bordered flex-1"
                required
              />
              <input
                type="number"
                name="salaryMax"
                placeholder="Max salary"
                className="input input-bordered flex-1"
                required
              />
              <select
                name="currency"
                className="select select-bordered flex-1"
                required
              >
                <option value="" disabled selected>
                  Select Currency
                </option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EURO">EURO</option>
                <option value="POUND">POUND</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write a detailed job description"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Requirements (comma-separated)</span>
            </label>
            <input
              type="text"
              name="requirements"
              placeholder="Enter required skills or qualifications"
              className="input input-bordered"
              required
            />
          </div>

          {/* Responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Responsibilities (comma-separated)
              </span>
            </label>
            <input
              type="text"
              name="responsibilities"
              placeholder="Enter key responsibilities"
              className="input input-bordered"
              required
            />
          </div>

          {/* HR Contact */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="Enter HR email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Enter HR name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Enter logo URL"
              className="input input-bordered"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
