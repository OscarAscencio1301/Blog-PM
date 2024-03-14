import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import SearchPage from "../pages/SearchPage";
import SinglePage from "../pages/SinglePage";
import AddPostPage from "../pages/AddPostPage";
import { PostsPage } from "../pages/PostsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/search/:term" element={<SearchPage />} />
        <Route path="/posts/" element={<PostsPage />} />
        <Route path="/posts/:id" element={<SinglePage />} />
        <Route path="/post/config" element={<AddPostPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
