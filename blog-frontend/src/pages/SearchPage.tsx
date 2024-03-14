import { useEffect } from "react";
import { PostList } from "../components/blog/PostList";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Title } from "../components/ui/Title";
import { usePosts } from "../hooks/usePosts";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { term = "" } = useParams();
  const { postsSearch, searchPostsAction } = usePosts();

  useEffect(() => {
    searchPostsAction(term);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogLayout>
      <div className="px-5 lg:px-20">
        <Title text="Entradas Encontradas" />
        <PostList subtitle={false} posts={postsSearch} />
      </div>
    </BlogLayout>
  );
};

export default SearchPage;
