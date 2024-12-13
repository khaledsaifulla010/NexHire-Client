import Banner from "../../components/Banner/Banner";
import BrowsCategory from "../../components/BrowsCategory/BrowsCategory";
import CountsUp from "../../components/CountsUp/CountsUp";
import HiringPoster from "../../components/HiringPoster/HiringPoster";
import HotJobs from "../../components/HotJobs/HotJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowsCategory></BrowsCategory>
      <HiringPoster></HiringPoster>
      <HotJobs></HotJobs>
      <CountsUp></CountsUp>
    </div>
  );
};

export default Home;
