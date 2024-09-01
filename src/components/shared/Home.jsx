import CategoryCarousel from "../CategoryCarousel";
import HeroSection from "../HeroSection";
import useCustomHook from "../hook/useCustomHook";
import LatestJobs from "../LatestJobs";

const Home = () => {
  useCustomHook()
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs/>
    </div>
  );
};

export default Home;
