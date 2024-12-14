import Banner from "../../components/Banner/Banner";
import Blogs from "../../components/Blogs/Blogs";
import BrowsCategory from "../../components/BrowsCategory/BrowsCategory";
import CountsUp from "../../components/CountsUp/CountsUp";
import FindOnePoster from "../../components/FindOnePoster/FindOnePoster";
import HiringPoster from "../../components/HiringPoster/HiringPoster";
import HotJobs from "../../components/HotJobs/HotJobs";
import NewLetter from "../../components/NewLetter/NewLetter";
import TopRecruiterCompany from "../../components/TopRecruiterCompany/TopRecruiterCompany";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowsCategory></BrowsCategory>
      <HiringPoster></HiringPoster>
      <HotJobs></HotJobs>
      <FindOnePoster></FindOnePoster>
      <CountsUp></CountsUp>
      <TopRecruiterCompany></TopRecruiterCompany>
      <Blogs></Blogs>
      <NewLetter></NewLetter>
    </div>
  );
};

export default Home;
