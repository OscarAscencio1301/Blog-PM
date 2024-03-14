import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import SearchPage from "../pages/SearchPage";
import SinglePage from "../pages/SinglePage";
import AddPostPage from "../pages/AddPostPage";
import { PostsPage } from "../pages/PostsPage";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useEffect } from "react";
import { Loading } from "../components/ui/Loading";

export const AppRouter = () => {
  const { statusAuth, renewAction } = useAuth();

  useEffect(() => {
    renewAction();
  }, []);

  if (statusAuth === "analyzing") {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {statusAuth === "login" ? (
          <>
            <Route path="/" element={<BlogPage />} />
            <Route path="/search/:term" element={<SearchPage />} />
            <Route path="/posts/" element={<PostsPage />} />
            <Route path="/posts/:id" element={<SinglePage />} />
            <Route path="/post/config" element={<AddPostPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<BlogPage />} />
            <Route path="/search/:term" element={<SearchPage />} />
            <Route path="/posts/:id" element={<SinglePage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
