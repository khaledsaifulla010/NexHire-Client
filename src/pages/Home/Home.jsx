import Banner from "../../components/Banner/Banner";
import Blogs from "../../components/Blogs/Blogs";
import BrowsCategory from "../../components/BrowsCategory/BrowsCategory";
import CountsUp from "../../components/CountsUp/CountsUp";
import HiringPoster from "../../components/HiringPoster/HiringPoster";
import HotJobs from "../../components/HotJobs/HotJobs";
import NewLetter from "../../components/NewLetter/NewLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowsCategory></BrowsCategory>
      <HiringPoster></HiringPoster>
      <HotJobs></HotJobs>
      <CountsUp></CountsUp>
      <Blogs></Blogs>
      <NewLetter></NewLetter>
    </div>
  );
};

export default Home;
