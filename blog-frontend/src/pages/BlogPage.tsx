import { HeroBlog } from "../components/blog/HeroBlog";
import { LatestPostList } from "../components/blog/LatestPostList";
import { PostList } from "../components/blog/PostList";
import { Title } from "../components/global/Title";
import { BlogLayout } from "../components/layouts/BlogLayout";

const BlogPage = () => {
  return (
    <BlogLayout>
      <HeroBlog />
      <Title />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-5 lg:px-20">
        <PostList />
        <LatestPostList />
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
