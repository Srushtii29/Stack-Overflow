import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Routes wraps all Routes */}

      <Route path="/" element={<Home />}></Route>
      <Route path="/Auth" element={<Auth />}></Route>
      <Route path="/Questions" element={<Questions />}></Route>
      <Route path="/AskQuestion" element={<AskQuestion />}></Route>
      <Route path="/Questions/:id" element={<DisplayQuestion />}></Route>
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoutes;
