import image1 from "../../../public/assets/candidate/candidate1.png";
import bookmark from "../../../public/assets/images/bookmark.jpg";
import { FaCamera } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const MyProfile = () => {
  return (
    <div className="mt-24 mb-72 ">
      <div className="w-full h-[300px] border-2 rounded-xl">
        <a
          href=""
          className="font-bold text-xl justify-center mt-32 text-slate-600 flex items-center gap-2"
        >
          Add A Cover Photo <FaCamera />
        </a>
      </div>
      <div className="mt-12 w-full border rounded-xl p-2 bg-base-200">
        {/* div1 */}
        <div className="flex items-center gap-8">
          <img className=" w-[250px] h-[250px] rounded-3xl" src={image1} />
          <div>
            <h1 className="font-bold text-4xl">Ishak Mahmud</h1>
            <h4 className="mt-2 font-semibold text-2xl text-blue-500">
              Frontend Developer
            </h4>
            <h4 className="mt-2 font-medium  text-slate-500 flex items-center text-base ">
              <IoLocation /> Dhaka, Bangladesh
            </h4>
          </div>
          <img
            className="w-[100px] h-[200px] absolute right-36 -bottom-8"
            src={bookmark}
          />
        </div>
        {/* div2 */}

        <div className="mt-12 flex items-center justify-around gap-72">
          <div className=" rounded-3xl w-[700px] h-[300px] p-4 bg-white">
            <h1 className="font-bold text-3xl ml-2 ">About Me</h1>
            <p className="mt-4 font-medium text-slate-600 text-justify px-2">
              This appears to be a stylized bookmark icon with red, white, and
              blue stripes. It is often used to represent saving, marking, or
              highlighting something digitally, such as in a reading app or a
              document. If you need further clarification or edits, let me know!
            </p>
          </div>
          <div className=" rounded-3xl w-[400px] p-4 bg-white">
            <h1 className="font-bold text-3xl ml-2 text-center">
              Area of Expertise
            </h1>
            <ol className="list-decimal list-inside mt-8 px-4 font-medium text-xl">
              <li>Web Design</li>
              <li>UI/UX Design</li>
              <li>Problem Solving</li>
            </ol>
          </div>
        </div>
        {/* div3 */}

        <div className="flex items-center justify-around gap-72">
          <div className="mt-12">
            <div className=" rounded-3xl w-[700px] h-[400px] p-4 bg-white">
              <h1 className="font-bold text-3xl ml-2 ">Contact</h1>
              <div className="mt-6 flex items-center justify-between text-lg font-medium">
                <h1 className="text-purple-600">Email : </h1>
                <h1>ishak123@gmail.com</h1>
              </div>
              <div className="divider -mt-1"></div>
              <div className="mt-6 flex items-center justify-between text-lg font-medium">
                <h1 className="text-purple-600">Phone Number : </h1>
                <h1>017XXXXXXX</h1>
              </div>
              <div className="divider -mt-1"></div>
              <div className="mt-6 flex items-center justify-between text-lg font-medium">
                <h1 className="text-purple-600">LinkedIn : </h1>
                <a
                  className="text-blue-400"
                  href="http://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://linkedin.com/
                </a>
              </div>
              <div className="divider -mt-1"></div>
              <div className="mt-6 flex items-center justify-between text-lg font-medium">
                <h1 className="text-purple-600">Github : </h1>
                <a
                  className="text-blue-400"
                  href="http://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://github.com/
                </a>
              </div>
              <div className="divider -mt-1"></div>
              <div className="mt-6 flex items-center justify-between text-lg font-medium">
                <h1 className="text-purple-600">Portfolio : </h1>
                <a
                  className="text-blue-400 "
                  href="http://portfolio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://portfolio.com/
                </a>
              </div>
            </div>
          </div>

          {/* div4 */}
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="rounded-3xl w-[400px] p-6 bg-white shadow-lg">
              <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
                My Skills
              </h1>
              <table className="table-auto w-full border-collapse border border-gray-300 text-center">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-lg font-bold">
                      SL/No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-lg font-bold">
                      Skills
                    </th>
                  </tr>
                </thead>
                <tbody className="text-lg font-medium text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">HTML5</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">CSS3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">
                      TAILWIND CSS
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">
                      DAISYUI
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">
                      JAVASCRIPT
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">
                      REST API
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">7</td>
                    <td className="border border-gray-300 px-4 py-2">REACT</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">8</td>
                    <td className="border border-gray-300 px-4 py-2">
                      FIREBASE
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">9</td>
                    <td className="border border-gray-300 px-4 py-2">NODEJS</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                    <td className="border border-gray-300 px-4 py-2">
                      MONGODB
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
