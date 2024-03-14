import { Link } from "react-router-dom";
import { FC } from "react";
import { Post } from "../../interfaces/posts/post.interfaces";
import { time } from "../../services/date";

export const SiglePostCard: FC<Post> = ({
  author,
  description,
  image,
  title,
  updatedAt,
  id,
}) => {
  return (
    <Link
      to={`/posts/${id}`}
      className="flex gap-5 p-3 cursor-pointer hover:scale-110 transition-all duration-10000"
    >
      {image ? (
        <img src={image} alt="Post" className="object-cover w-1/3 rounded-lg" />
      ) : (
        <div className="border w-1/3 h-40 flex justify-center items-center p-6 bg-gray-600/10 rounded-lg">
          <span className="text-md text-center text-gray-600/50">Sin imagen</span>
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="text-2xl">{title}</h3>
        <h4 className="text-lg text-primary italic">{author}</h4>
        <h4 className="text-sm font-light text-gray-600">
          Hace {time(updatedAt)}
        </h4>
        <span className="font-light text-sm text-gray-600">
          {description.slice(0, 70)}...
        </span>
      </div>
    </Link>
  );
};
