import Lottie from "lottie-react";
import bannerLottie from "../../../public/lottieFiles/bannerLottie.json";
const Banner = () => {
  return (
    <div className="mb-72 mt-12 border-2 rounded-xl">
      <div className="hero bg-base-200 h-[600px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex items-center">
            <div className="w-[50%]">
              <h1 className="text-5xl font-bold">
                Your Next Opportunity Awaits!
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="w-[50%]">
              <Lottie animationData={bannerLottie}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
