import { Contact, Mail, Pen } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobs from "./AppliedJobs";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useState } from "react";
import { useSelector } from "react-redux";

// const Skills = ["frotned", "backend", "mern"];
const isResume = false;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              alt="profile"
            />
          </Avatar>
          <div>
            <h1 className="font-medium text-xl">{user?.fullName}</h1>
            <p>{user?.profile?.bio}</p>
          </div>
        </div>
        <Button
          className="text-right"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          <Pen />
        </Button>
      </div>
      <div className="my-5">
        <div className="flex items-center gap-3 my-2">
          <Mail />
          <span>{user?.email}</span>
        </div>
        <div className="flex items-center gap-3 my-2">
          <Contact />
          <span>{user?.phoneNumber}</span>
        </div>
      </div>
      <div className="my-5">
        <h1>Skills</h1>
        <div className="flex items-center gap-1">
          {user?.profile?.skills ? (
            user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-md font-bold">Resume</Label>
        {isResume ? (
          <a
            target="blank"
            href="https://google.com"
            className="text-blue-500 w-full hover:underline cursor-pointer"
          >
            {user?.profile?.resume}
          </a>
        ) : (
          <span>NA</span>
        )}
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Title */}
        <AppliedJobs />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
