import Lottie from "lottie-react";
import { motion } from "motion/react";
import bannerLottie from "../../../public/lottieFiles/bannerLottie.json";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="mb-72 mt-12 bg-purple-50">
      <div className="hero h-[480px]">
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
              <button className="btn btn-primary">Get Started</button>
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
