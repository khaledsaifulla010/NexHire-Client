import Lottie from "lottie-react";
import bannerLottie from "../../../public/lottieFiles/bannerLottie.json";
const Banner = () => {
  return (
    <div className="mb-72 mt-12 bg-purple-50">
      <div className="hero h-[480px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex items-center ">
            <div className="w-[60%]">
              <h1 className="text-5xl font-bold text-purple-950">
                Your Next <span className="text-purple-600">Opportunity</span>{" "}
                Awaits!
              </h1>
              <p className="py-6 text-justify text-xl font-semibold text-slate-700">
                Discover your dream job with NexHire. Connect with top
                employers, explore <br /> exciting opportunities, and take the
                next step in your career journey.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="w-[40%]">
              <Lottie
                className="w-[600px]"
                animationData={bannerLottie}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
