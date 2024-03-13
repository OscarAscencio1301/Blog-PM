import { PostList } from "../components/blog/PostList";
import { BlogLayout } from "../components/layouts/BlogLayout";

const SearchPage = () => {
  return (
    <BlogLayout>
      <div className="px-5 lg:px-20">
        <PostList />
      </div>
    </BlogLayout>
  );
};

export default SearchPage;
