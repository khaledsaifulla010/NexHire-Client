import { MdEmail, MdOutlineVerified } from "react-icons/md";
import letter1 from "../../../public/assets/newsLetter/letter1.jpg";
import letter2 from "../../../public/assets/newsLetter/letter2.jpg";
import letter3 from "../../../public/assets/newsLetter/letter3.jpg";
import letter4 from "../../../public/assets/newsLetter/letter4.jpg";
import letter5 from "../../../public/assets/newsLetter/letter5.jpg";
const NewLetter = () => {
  return (
    <div className="mt-24 mb-24">
      <div
        className="w-[1300px] rounded-xl border-2 h-[550px] ml-20 relative"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/6vzGBbT/bg.jpg)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-xl"></div>

        <div className="flex items-center justify-around gap-8 relative z-10">
          {/* div1 */}
          <div className="mt-4">
            <img className="w-32 h-32 mt-8 mr-12 rounded-3xl" src={letter1} />
            <img className="w-32 h-32 mt-8 ml-28 rounded-3xl" src={letter2} />
            <img className="w-32 h-32 mt-8 rounded-3xl" src={letter3} />
          </div>

          {/* div2 */}
          <div>
            <h1 className="text-white font-bold text-4xl ml-4">
              New Things Will Always <br />
              <span className="ml-12">Update Regularly</span>
            </h1>
            <input
              className="px-12 mt-10 w-[450px] h-16 rounded-xl text-xl font-semibold"
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email Here"
            />
            <MdEmail className="relative bottom-[45px] ml-3 text-3xl text-slate-500" />
            <button className="relative bottom-[84px] left-[318px] border p-2 w-32 rounded-xl  bg-blue-500 text-white font-bold text-lg flex items-center gap-1">
              <MdOutlineVerified className="mt-1 text-lg ml-0.5" />
              Subscribe
            </button>
          </div>

          {/* div3 */}
          <div className="mt-4">
            <img className="w-32 h-32  mr-16 rounded-3xl" src={letter4} />
            <img className="w-32 h-32 mt-24 ml-20 rounded-3xl" src={letter5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
