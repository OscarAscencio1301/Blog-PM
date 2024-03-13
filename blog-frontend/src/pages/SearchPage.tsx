import { useEffect } from "react";
import { PostList } from "../components/blog/PostList";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Title } from "../components/ui/Title";

const SearchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogLayout>
      <div className="px-5 lg:px-20">
        <Title text="Entradas Encontradas"/>
        <PostList subtitle={false} />
      </div>
    </BlogLayout>
  );
};

export default SearchPage;
