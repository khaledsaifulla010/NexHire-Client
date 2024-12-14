import { Link } from "react-router-dom";
import image1 from "../../../public/assets/images/jobPoster.jpg";
import { FaSearchengin } from "react-icons/fa6";

const FindOnePoster = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <div className="w-[60%]">
          <img className="w-[800px] h-[500px]" src={image1} />
        </div>
        <div className="w-[50%] ">
          <h4 className="text-4xl font-bold text-slate-500">
            Millions Of Jobs.
          </h4>
          <h1 className="font-bold text-purple-950 text-6xl mt-1">
            Find The One That’s <br />{" "}
            <span className="text-purple-700">Right</span> For You
          </h1>
          <p className="text-justify mt-6 font-medium text-lg mr-28 text-slate-600">
            Uncover endless opportunities browse open positions, receive
            personalized salary insights, and explore company reviews from over
            600,000 businesses globally. Your perfect job is waiting to be
            discovered!
          </p>
          <div className="flex items-center gap-8">
            <Link to={"/allJobs"}>
              <button className="ml-4 btn mt-2 bg-blue-100 border-blue-200 text-blue-800 text-lg font-bold">
                <FaSearchengin className="mt-1 text-lg" /> Search Jobs
              </button>
            </Link>
            <Link to={'/aboutUs'}>
              <h1 className="underline font-bold text-lg mt-1 text-slate-500 hover:text-purple-500">
                Learn More
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindOnePoster;
