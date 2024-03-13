import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { DashboardList } from "../components/posts/DashboardList";
import { PostTable } from "../components/posts/PostTable";
import { Title } from "../components/ui/Title";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const { posts, getLatestPostsAction, getPostsAction } =
  usePosts();

useEffect(() => {
  getLatestPostsAction();
  getPostsAction();
}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogLayout>
      <Title text="Administrar Entradas" />
      <div className="px-5 flex flex-col gap-10 lg:px-20">
        <DashboardList />
        <PostTable posts={posts}/>
      </div>
    </BlogLayout>
  );
};
