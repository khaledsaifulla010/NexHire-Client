import Lottie from "lottie-react";
import { motion } from "motion/react";
import bannerLottie from "../../../public/lottieFiles/bannerLottie.json";
import { Typewriter } from "react-simple-typewriter";
import { FaBriefcase } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import Location from "../Location/Location";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="mt-12 bg-purple-50">
      <div className="hero h-[650px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex items-center ">
            <div className="w-[60%] font-extrabold text-5xl">
              <motion.div animate={{ color: ["#6B21A8", "#4C1D95"] }}>
                <Typewriter
                  words={["Your Next Opportunity Awaits"]}
                  loop={0}
                  cursor
                  cursorStyle="!"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </motion.div>

              <p className="py-6 text-justify text-xl font-semibold text-slate-500 mr-[120px]">
                Discover your dream job with
                <span className="text-purple-950 font-black"> Nex</span>
                <span className="text-purple-700 font-black">Hire</span>.
                Connect with top employers, <br /> explore exciting
                opportunities, and take the next step in your career journey.
              </p>
            </div>
            <motion.div
              className="w-[40%]"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Lottie
                className="w-[500px] "
                animationData={bannerLottie}
              ></Lottie>
            </motion.div>
          </div>
        </div>
        <div className="flex h-[100px] border rounded-xl items-center p-2 bg-white gap-4 mt-[650px] w-[900px] justify-between border-base-200 shadow-xl absolute">
          {/* Industry */}
          <div className="relative">
            <FaBriefcase className="text-xl absolute mt-4 ml-4 text-purple-800" />
            <select className="select  w-[220px] text-center text-base text-slate-600">
              <option selected className="text-center text-lg text-slate-500">
                Industry
              </option>
              <option className="text-center text-lg text-slate-500">
                Software
              </option>
              <option className="text-center text-lg text-slate-500">
                Development
              </option>
              <option className="text-center text-lg text-slate-500">
                Finance
              </option>
              <option className="text-center text-lg text-slate-500">
                Management
              </option>
            </select>
          </div>
          {/* Location */}
          <div>
            <Location></Location>
          </div>
          {/* Keywords */}
          <div className="relative">
            <TbGridDots className="text-xl absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 " />
            <input
              className="text-lg  rounded-md pl-12 pr-4 py-2 w-full "
              type="text"
              placeholder="Keyword"
            />
          </div>
          {/* Button */}

          <button className="p-2 border rounded-xl font-semibold text-lg flex items-center gap-1 bg-purple-900 text-white border-purple-950 shadow-2xl">
            <FaSearch className="mt-1" /> Search
          </button>
        </div>
        <div className="mt-[820px] absolute">
          <h1 className="font-bold text-slate-500 text-base ">
            Popular Searches :
            <span className="underline font-normal ml-1">Designer</span> ,
            <span className="underline ml-1 font-normal">Web Developer</span> ,
            <span className="underline ml-1 font-normal">Engineer</span> ,
            <span className="underline ml-1 font-normal">Digital Marketer</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
