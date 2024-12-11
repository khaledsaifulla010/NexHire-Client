import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    jobType,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  console.log(job);
  return (
    <div className="card  bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 ease-in-out p-4 border w-[450px] h-[350px] ">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-bold text-xl text-gray-800">{company}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaLocationDot className="mt-1" /> {location}
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-semibold flex items-center gap-2 ">
        <BsBriefcaseFill className="mt-1" /> {jobType}
      </p>
      <p className="text-base text-gray-600 mb-4 line-clamp-3 text-justify">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {requirements?.map((requirement, index) => (
          <span
            key={index}
            className="badge badge-outline border-purple-200 bg-purple-50 text-purple-700 font-semibold text-center"
          >
            {requirement}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-purple-800 flex items-center gap-1">
          <CiBadgeDollar /> {salaryRange?.min} - {salaryRange?.max}
          {salaryRange?.currency.toUpperCase()}
        </span>
        <Link to={`/hotJobs/${_id}`}>
          <button className="btn  bg-blue-100 border-blue-200 text-blue-800 btn-sm font-bold">
            Apply Now <FaPaperPlane />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
