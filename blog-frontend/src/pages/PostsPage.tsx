import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { DashboardList } from "../components/posts/DashboardList";
import { PostTable } from "../components/posts/PostTable";
import { Title } from "../components/ui/Title";
import { usePosts } from "../hooks/usePosts";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PostsPage = () => {
  const { posts, getPostsAction } = usePosts();
  const { logoutAction} = useAuth();

  useEffect(() => {
    getPostsAction();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogLayout>
      <div className="px-5 flex flex-col gap-10 lg:px-20">
        <div className="flex  flex-col xl:flex-row items-center justify-between">
          <Title text="Administrar Entradas" />
          <button
            onClick={logoutAction}
            className="bg-red-500 text-center w-full xl:w-2/12 hover:bg-blue-950 text-white py-3 px-12 rounded-lg"
          >
            Cerrar Sesión
          </button>
        </div>
        <DashboardList />
        <Link
          to="/post/config"
          className="bg-primary text-center w-full xl:w-1/5 hover:bg-blue-950 text-white py-3 px-12 rounded-lg"
        >
          Agregar Entrada
        </Link>
        <PostTable posts={posts} />
      </div>
    </BlogLayout>
  );
};
