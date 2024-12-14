import axios from "axios";
import { useEffect, useState } from "react";
import TopRecruiterCompanyCard from "../TopRecruiterCompanyCard/TopRecruiterCompanyCard";

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
        Top Recruiters
      </h1>
      <p className="text-center mt-2 text-lg font-semibold text-slate-500">
        Shape Your Future. Careers, Gigs, Internships.
      </p>
      <div className="grid grid-cols-4 gap-y-10 mt-10">
        {recruters.map((recruiter) => (
          <TopRecruiterCompanyCard
            key={recruiter._id}
            recruiter={recruiter}
          ></TopRecruiterCompanyCard>
        ))}
      </div>
    </div>
  );
};

export default TopRecruiterCompany;
