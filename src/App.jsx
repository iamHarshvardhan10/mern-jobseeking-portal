import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/shared/Footer";
import Home from "./components/shared/Home";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
