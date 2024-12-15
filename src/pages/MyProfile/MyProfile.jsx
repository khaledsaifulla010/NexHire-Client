import image1 from "../../../public/assets/candidate/candidate1.png";
import bookmark from "../../../public/assets/images/bookmark.jpg";
import { IoLocation } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyProfile = () => {
  return (
    <div className="mt-16 px-6 lg:px-20 mb-36">
      {/* Profile Card */}
      <div className="w-full max-w-4xl mx-auto bg-gradient-to-tr from-indigo-100 to-purple-100 shadow-xl rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Picture */}
          <img
            className="w-[200px] h-[200px] rounded-full shadow-lg border-4 border-white"
            src={image1}
            alt="Profile"
          />

          {/* Info Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">Ishak Mahmud</h1>
            <h4 className="mt-2 text-2xl font-semibold text-purple-600">
              Frontend Developer
            </h4>
            <p className="mt-2 text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <IoLocation className="text-blue-500" /> Dhaka, Bangladesh
            </p>
          </div>
          {/* Edit profile */}
          <Link
            to={"/editMyProfile"}
            className="text-3xl hidden lg:block ml-auto rounded-full text-green-600"
          >
            <button>
              <FaEdit />
            </button>
          </Link>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 text-justify">
          This appears to be a stylized bookmark icon with red, white, and blue
          stripes. It is often used to represent saving, marking, or
          highlighting something digitally, such as in a reading app or a
          document. If you need further clarification or edits, let me know!
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
        <div className="mt-4 space-y-4 text-lg text-gray-600">
          <div className="flex justify-between">
            <span className="text-purple-600 font-medium">Email:</span>
            <span>ishak123@gmail.com</span>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />

          <div className="flex justify-between">
            <span className="text-purple-600 font-medium">Phone:</span>
            <span>017XXXXXXX</span>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />

          <div className="flex justify-between">
            <span className="text-purple-600 font-medium">LinkedIn:</span>
            <a
              href="http://linkedin.com/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://linkedin.com/
            </a>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />

          <div className="flex justify-between">
            <span className="text-purple-600 font-medium">Github:</span>
            <a
              href="http://github.com/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://github.com/
            </a>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />

          <div className="flex justify-between">
            <span className="text-purple-600 font-medium">Portfolio:</span>
            <a
              href="http://portfolio.com/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://portfolio.com/
            </a>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />
        </div>
      </div>

      {/* Expertise and Skills Section */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        {/* Area of Expertise Table */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full lg:w-1/2 border hover:scale-105 transition-all duration-300">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Area of Expertise
          </h1>
          <table className="table-auto w-full text-lg text-gray-600 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th className="px-4 py-2">SL/No</th>
                <th className="px-4 py-2">Expertise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { expertise: "Web Design" },
                { expertise: "UI/UX Design" },
                { expertise: "Problem Solving" },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 text-center">{idx + 1}</td>
                  <td className="px-4 py-2">{item.expertise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Skills Table */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full lg:w-1/2 border hover:scale-105 transition-all duration-300">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            My Skills
          </h1>
          <table className="table-auto w-full text-lg text-gray-600 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th className="px-4 py-2">SL/No</th>
                <th className="px-4 py-2">Skill</th>
                <th className="px-4 py-2">Experience</th>
              </tr>
            </thead>
            <tbody>
              {[
                { skill: "HTML5", level: "Expert" },
                { skill: "CSS3", level: "Expert" },
                { skill: "Tailwind CSS", level: "Intermediate" },
                { skill: "JavaScript", level: "Expert" },
                { skill: "React", level: "Expert" },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 text-center">{idx + 1}</td>
                  <td className="px-4 py-2">{item.skill}</td>
                  <td className="px-4 py-2 text-center">{item.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
