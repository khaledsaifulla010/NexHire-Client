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
      <div className="mt-12 w-full border rounded-xl h-96 p-2 bg-base-200">
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
      </div>
    </div>
  );
};

export default MyProfile;
