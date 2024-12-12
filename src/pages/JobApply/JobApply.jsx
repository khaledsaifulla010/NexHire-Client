const JobApply = () => {
  return (
    <div className="mt-24 mb-72">
      <div className="card bg-base-200 border max-w-[800px]  mx-auto">
        <form className="card-body">
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

export default JobApply;
