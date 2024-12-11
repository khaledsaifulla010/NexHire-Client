import AllJobs from "../../components/AllJobs/AllJobs";
import Banner from "../../components/Banner/Banner";
import BrowsCategory from "../../components/BrowsCategory/BrowsCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowsCategory></BrowsCategory>
      <AllJobs></AllJobs>
    </div>
  );
};

export default Home;
