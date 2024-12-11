import Marquee from "react-fast-marquee";

import icon1 from "../../../public/assets/icons/icon1.png";
import icon2 from "../../../public/assets/icons/icon2.png";
import icon3 from "../../../public/assets/icons/icon3.png";
import icon4 from "../../../public/assets/icons/icon4.png";
import icon5 from "../../../public/assets/icons/icon5.png";
import icon6 from "../../../public/assets/icons/icon6.png";
import icon7 from "../../../public/assets/icons/icon7.png";
import icon8 from "../../../public/assets/icons/icons8.png";
import icon9 from "../../../public/assets/icons/icon9.png";
import icon10 from "../../../public/assets/icons/icon10.png";

const BrowsCategory = () => {
  return (
    <div className="mt-64">
      <div>
        <h1 className="font-black text-4xl text-center">Browse by Category</h1>
        <p className="text-center mt-2 text-lg font-semibold text-slate-500">
          Discover your perfect job with 800+ new opportunities daily.
        </p>
      </div>

      <div className="mt-12">
        <Marquee speed={20} gradient={false}>
          <div className="flex gap-12">
            {[
              icon1,
              icon2,
              icon3,
              icon4,
              icon5,
              icon6,
              icon7,
              icon8,
              icon9,
              icon10,
            ].map((icon, index) => (
              <div
                key={index}
                className="border w-[270px] flex items-center gap-4 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer ml-4"
              >
                <img className="w-12" src={icon} alt={`icon${index + 1}`} />
                <div>
                  <h1 className="text-lg font-bold transition duration-300 hover:text-purple-500">
                    {
                      [
                        "Software",
                        "Human Resources",
                        "Marketing & Sales",
                        "Customer Help",
                        "Finance",
                        "Management",
                        "Retail & Products",
                        "Security Analyst",
                        "Content Writer",
                        "Market Research",
                      ][index]
                    }
                  </h1>
                  <p className="text-gray-600 transition duration-300 hover:text-purple-500">
                    {
                      [
                        "1856 Jobs Available",
                        "166 Jobs Available",
                        "224 Jobs Available",
                        "675 Jobs Available",
                        "986 Jobs Available",
                        "740 Jobs Available",
                        "336 Jobs Available",
                        "456 Jobs Available",
                        "550 Jobs Available",
                        "221 Jobs Available",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrowsCategory;
