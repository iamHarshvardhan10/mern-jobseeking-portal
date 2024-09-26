import { useSelector } from "react-redux";
import CategoryCarousel from "../CategoryCarousel";
import HeroSection from "../HeroSection";
import useGetAllJobs from "../hook/useGetAllJobs";
import LatestJobs from "../LatestJobs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useGetAllJobs();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </div>
  );
};

export default Home;
