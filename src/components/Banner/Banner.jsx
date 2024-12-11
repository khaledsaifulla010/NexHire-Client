import Lottie from "lottie-react";
import { motion } from "motion/react";
import bannerLottie from "../../../public/lottieFiles/bannerLottie.json";
import { Typewriter } from "react-simple-typewriter";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import Location from "../Location/Location";
const Banner = () => {
  return (
    <div className="mt-12 mb-72 bg-purple-50">
      <div className="hero h-[600px]">
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

              <p className="py-6 text-justify text-xl font-semibold text-slate-700 mr-[120px]">
                Discover your dream job with
                <span className="text-purple-950 font-black"> Nex</span>
                <span className="text-purple-700 font-black">Hire</span>.
                Connect with top employers, <br /> explore exciting
                opportunities, and take the next step in your career journey.
              </p>
              <div>
                {/* Industry */}
                <div className="relative">
                  <FaBriefcase className="text-xl absolute mt-7 ml-4 text-purple-800" />
                  <select className="select select-bordered w-[220px] text-center text-base text-slate-600 pl-4">
                    <option
                      selected
                      className="text-center text-lg text-slate-500"
                    >
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
                <Location></Location>
              </div>
            </div>
            <motion.div
              className="w-[40%]"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Lottie
                className="w-[600px] "
                animationData={bannerLottie}
              ></Lottie>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
