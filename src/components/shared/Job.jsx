import FilterCard from "../FilterCard";
import JobCard from "../JobCard";

const fileterJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Job = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-[20%]">
          <FilterCard />
        </div>
        {fileterJobs.length <= 0 ? (
          <span>Job Not Found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4">
              {fileterJobs.map((job, index) => (
                <JobCard key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Job;
