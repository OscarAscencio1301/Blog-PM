import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Navigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { Loading } from "../components/ui/Loading";
import { time } from "../services/date";


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
      <div className="flex flex-col xl:flex-row p-5 lg:p-20 gap-12">
        {postView.image ? (
          <img
            src={postView.image}
            alt="Post"
            className="object-cover w-full xl:w-1/3 rounded-lg"
          />
        ) : (
          <div className="border w-full xl:w-1/3 h-80 flex justify-center items-center p-6 bg-gray-600/10 rounded-lg">
            <span className="text-md text-center text-gray-600/50">
              Sin imagen
            </span>
          </div>
        )}
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-4xl">{postView.title}</h3>
          <h4 className="text-2xl text-primary italic">{postView.author}</h4>
          <h5 className="text-lg text-primary italic">Hace {time(postView.updatedAt)}</h5>
          <span className="font-light text-lg text-gray-600 text-justify">
            {postView.description}
          </span>
        </div>
      </div>
    </BlogLayout>
  );
};

export default SinglePage;
