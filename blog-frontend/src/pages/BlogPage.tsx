import { HeroBlog } from "../components/blog/HeroBlog";
import { LatestPostList } from "../components/blog/LatestPostList";
import { PostList } from "../components/blog/PostList";
import { Title } from "../components/ui/Title";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { usePosts } from "../hooks/usePosts";
import { useEffect } from "react";

const BlogPage = () => {
  const { posts, postsLatest, getPostsAction } = usePosts();

  useEffect(() => {
    getPostsAction();
  }, []);

  return (
    <BlogLayout>
      <HeroBlog />
      <Title text="Revisar nuestras entradas" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-5 lg:px-20">
        <PostList posts={posts} />
        <LatestPostList posts={postsLatest} />
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
