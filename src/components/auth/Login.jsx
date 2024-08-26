import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINTS } from "@/utils/constant";
import { signFail, signInStart, signSuccess } from "@/redux/slice/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart(true));
      dispatch(signFail(null));
      const res = await axios.post(`${USER_API_ENDPOINTS.login}`, formData, {
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        dispatch(signFail(null));
        dispatch(signSuccess(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      dispatch(signFail(error.message));
      toast(error.message);
    } finally {
      dispatch(signInStart(false));
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Label>Roles</Label>
            <div>
              <RadioGroup
                defaultValue="comfortable"
                className="flex items-center gap-8 my-4"
              >
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                    checked={formData.role === "recruiter"}
                    onChange={handleChange}
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}

          <span className="text-sm">
            Dont Have An Account?
            <Link to={"/sign-up"} className="text-blue-600">
              Sing Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
