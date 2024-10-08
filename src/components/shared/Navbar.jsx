import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = true;
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <Link to={"/"}>
              Job<span className="text-[#F83002]">Portal</span>
            </Link>
          </h1>
        </div>
        <div className="flex gap-6">
          {user && user.role === "recruiter" ? (
            <ul className="flex font-medium items-center gap-5">
              <li>
                <Link to={"/admin/companies"}>Companies</Link>
              </li>
              <li>
                <Link to={"/admin/jobs"}>Jobs</Link>
              </li>
            </ul>
          ) : (
            <ul className="flex font-medium items-center gap-5">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/jobs"}>Jobs</Link>
              </li>
              <li>
                <Link to={"/browse"}>Browse</Link>
              </li>
            </ul>
          )}
          {!user ? (
            <div className="flex items-center justify-center gap-4">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/sign-up"}>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Sign-Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="cursor-pointer"
                  ></AvatarImage>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    ></AvatarImage>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Mern Stack Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center text-gray-600 mt-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer border-none outline-none">
                    {user && user?.role == "student" && (
                      <Button variant="link">
                        <User2 className="px-1" />{" "}
                        <Link to={"/view-profile"}>View Profile</Link>
                      </Button>
                    )}
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer border-none outline-none">
                    <Button variant="link">
                      <LogOut className="px-1" />
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
