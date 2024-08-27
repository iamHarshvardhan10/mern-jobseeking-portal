import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"}>Position</Badge>
            <Badge className={"text-blue-700 font-bold"}>Type</Badge>
            <Badge className={"text-blue-700 font-bold"}>LPA</Badge>
          </div>
        </div>
        <Button
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role:</h1>
        <h1 className="font-bold my-1">Location</h1>
        <h1 className="font-bold my-1">Description</h1>
        <h1 className="font-bold my-1">Experience</h1>
        <h1 className="font-bold my-1">Salary</h1>
        <h1 className="font-bold my-1">Total Applicants</h1>
        <h1 className="font-bold my-1">Posted Date:</h1>
      </div>
    </div>
  );
};

export default JobDescription;
