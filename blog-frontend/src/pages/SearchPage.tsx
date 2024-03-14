import { useEffect } from "react";
import { PostList } from "../components/blog/PostList";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Title } from "../components/ui/Title";
import { usePosts } from "../hooks/usePosts";
import { Link, useParams } from "react-router-dom";

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
        <Title text="Búsqueda de Entradas" />
        {postsSearch.length > 0 ? (
          <PostList subtitle={false} posts={postsSearch} />
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-4xl">
              No se encontraron entradas{" "}
              <span className="block my-3">con ese término de búsqueda</span>
            </h2>
            <Link
              to="/"
              className="bg-primary hover:bg-blue-950 text-white py-3 px-12 rounded-lg"
            >
              Regresar
            </Link>
          </div>
        )}
      </div>
    </BlogLayout>
  );
};

export default SearchPage;
