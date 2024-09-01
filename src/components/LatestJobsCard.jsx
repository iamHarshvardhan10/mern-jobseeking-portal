
import { Badge } from "./ui/badge";

const LatestJobsCard = () => {
  
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job1</h1>
        <p className="text-sm text-gray-600">Desc1</p>
      </div>
      <div>
        <div className="flex items-center gap-2 m-4">
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
            12 Positions
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="ghost">
            developer
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
            12 LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobsCard;
