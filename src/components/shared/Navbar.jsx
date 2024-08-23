import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex gap-6">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline">Login</Button>
              <Link to={'/sign-up'}>
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
                    <Button variant="link">
                      <User2 className="px-1" /> View Profile
                    </Button>
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
