import CountUp from "react-countup";

const CountsUp = () => {
  return (
    <div className="mt-12 mb-24 w-[1300px]">
      {/* <h1>
          <CountUp start={50} end={100} />
        </h1> */}
      {/* div 1 */}
      <div className="flex items-center justify-between">
        <div className="w-[300px] h-[250px] rounded-xl border p-4 space-y-4">
          <h1 className="text-6xl font-bold text-center text-purple-800">
            <CountUp start={20} end={500} duration={2.5} />K
          </h1>
          <h2 className="text-center text-3xl font-bold text-purple-950">
            Jobs Posted
          </h2>
          <p className="text-justify font-semibold  text-slate-500 text-base">
            Connecting job seekers with the right opportunities to build a
            brighter future.
          </p>
        </div>
        {/* div 2 */}
        <div className="w-[300px] h-[250px] border rounded-xl p-4 space-y-4">
          <h1 className="text-6xl font-bold text-center text-purple-800">
            <CountUp start={1} end={10} duration={2.5} />K
          </h1>
          <h2 className="text-center text-3xl font-bold text-purple-950">
            Active Employers
          </h2>
          <p className="text-justify font-semibold  text-slate-500 text-base">
            Trusted companies regularly posting jobs to match your skills and
            interests.
          </p>
        </div>
        {/* div 3 */}
        <div className="w-[300px] h-[250px] border rounded-xl p-4 space-y-4">
          <h1 className="text-6xl font-bold text-center text-purple-800">
            <CountUp start={1} end={50} duration={2.5} />M
          </h1>
          <h2 className="text-center text-3xl font-bold text-purple-950">
            Registered Users
          </h2>
          <p className="text-justify font-semibold  text-slate-500 text-base">
            Trusted companies regularly posting jobs to match your skills and
            interests.
          </p>
        </div>
        {/* div 4 */}
        <div className="w-[300px] h-[250px] rounded-xl border p-4 space-y-4">
          <h1 className="text-6xl font-bold text-center text-purple-800">
            <CountUp start={0} end={98} duration={2.5} />%
          </h1>
          <h2 className="text-center text-3xl font-bold text-purple-950">
            Client Satisfaction
          </h2>
          <p className="text-justify font-semibold  text-slate-500 text-base">
            Providing seamless job search and hiring experiences for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountsUp;
