import { FaCamera } from "react-icons/fa";
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
    </div>
  );
};

export default MyProfile;
