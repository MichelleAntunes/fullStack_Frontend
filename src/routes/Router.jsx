import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/not-found";
import Posts from "../pages/posts";
import PostDetails from "../pages/post-details";
import SignupPage from "../pages/signup";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};