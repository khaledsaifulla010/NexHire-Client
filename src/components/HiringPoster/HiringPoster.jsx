import { MdOutlineVerified } from "react-icons/md";
import joinUs from "../../../public/assets/images/joinUs.jpg";
import jobOffer from "../../../public/assets/images/jobOffer.jpg";
import { Link } from "react-router-dom";

const HiringPoster = () => {
  return (
    <div className="mt-36  w-[1100px] border flex items-center p-4 rounded-lg  justify-between ml-44">
      <div>
        <img className="w-[160px]" src={joinUs} />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-500">
          WE ARE <br />
          <span className="font-bold text-5xl text-black">HIRING</span>
        </h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-500 mt-10">
          Let’s <span className="text-purple-950">Explore</span> <br /> &
          <span className="text-purple-950">Work</span> Together
        </h1>
      </div>
      <div>
        <Link to={`/allJobs`}>
          <button className="btn mt-10 bg-blue-100 border-blue-200 text-blue-800 btn-sm font-bold">
            <MdOutlineVerified className="mt-1 text-lg" /> Apply Now
          </button>
        </Link>
      </div>
      <div>
        <img className="w-[170px]" src={jobOffer} />
      </div>
    </div>
  );
};

export default HiringPoster;
