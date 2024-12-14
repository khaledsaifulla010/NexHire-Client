import axios from "axios";
import { useEffect, useState } from "react";

const TopRecruiterCompany = () => {
  const [recruters, setRecruiters] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/topRecruiterCompany")
      .then((data) => setRecruiters(data.data));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="font-black text-4xl text-center text-purple-950">
        Top Recruiters {recruters.length}
      </h1>
      <p className="text-center mt-2 text-lg font-semibold text-slate-500">
        Shape Your Future. Careers, Gigs, Internships.
      </p>
      <div>
        {
            
        }
      </div>
    </div>
  );
};

export default TopRecruiterCompany;
