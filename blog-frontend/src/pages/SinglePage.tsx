import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";
import image from "/post.png";
import { Navigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { Loading } from "../components/ui/Loading";

const SinglePage = () => {
  const { id = 1 } = useParams();
  const { getPostAction, postView, isLoading } = usePosts();

  useEffect(() => {
    getPostAction(Number(id));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loading />;
  if (!postView) return <Navigate to={"/"} />;

  return (
    <BlogLayout>
      <div className="flex p-5 lg:p-20 gap-12">
        <img src={postView.image} alt="Post" className="object-cover w-1/3 rounded-lg" />
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-5xl">{postView.title}</h3>
          <h4 className="text-2xl text-primary italic">{postView.author}</h4>
          <span className="font-light text-lg text-gray-600 text-justify">
            {postView.description}
          </span>
        </div>
      </div>
    </BlogLayout>
  );
};

export default SinglePage;
