import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { DashboardList } from "../components/posts/DashboardList";
import { PostTable } from "../components/posts/PostTable";
import { Title } from "../components/ui/Title";

export const PostsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogLayout>
      <Title text="Administrar Entradas" />
      <div className="px-5 flex flex-col gap-10 lg:px-20">
        <DashboardList />
        <PostTable />
      </div>
    </BlogLayout>
  );
};
