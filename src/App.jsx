import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Browse from "./components/shared/Browse";
import Footer from "./components/shared/Footer";
import Home from "./components/shared/Home";
import Job from "./components/shared/Job";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
