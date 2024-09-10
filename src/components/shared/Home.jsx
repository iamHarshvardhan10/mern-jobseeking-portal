import CategoryCarousel from "../CategoryCarousel";
import HeroSection from "../HeroSection";
import useGetAllJobs from "../hook/useGetAllJobs";
import LatestJobs from "../LatestJobs";

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </div>
  );
};

export default Home;
