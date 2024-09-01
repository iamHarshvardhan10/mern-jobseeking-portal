import { useSelector } from "react-redux";
import LatestJobsCard from "./LatestJobsCard";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.jobs);
  console.log(allJobs)
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length > 0 ? (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobsCard key={job._id} job={job} />)
        ) : (
          <span>No Jobs Found</span>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
