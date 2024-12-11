import { useEffect, useState } from "react";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
const Location = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("../../../public/country/country.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="relative">
      <FaLocationDot className="text-xl absolute mt-4 ml-4 text-purple-800" />
      <select className="select w-[220px] text-center text-base text-slate-600">
        <option selected className="text-center text-lg text-slate-500">
          Select Country
        </option>
        {countries.map((country) => (
          <option
            key={country.id}
            className="text-center text-lg text-slate-500"
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Location;
