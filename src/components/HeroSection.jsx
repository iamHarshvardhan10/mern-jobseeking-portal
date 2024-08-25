import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search , Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          tenetur a! Voluptatum deleniti laudantium iste natus cumque numquam
          nostrum aliquid.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-4 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            className="outline-none border-none w-full h-10"
          />
          <button className="rounded-r-full bg-[#6A38C2]">
            <Search className="py-2 px-2 h-10 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
