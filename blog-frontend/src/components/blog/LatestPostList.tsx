import { FC } from "react";
import { Post } from "../../interfaces/posts/post.interfaces";
import { Subtitle } from "../ui/Subtitle";
import { SiglePostCard } from "./SiglePostCard";

interface PropsPost {
  posts: Post[];
}

export const LatestPostList: FC<PropsPost> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      <Subtitle text="Últimas entradas" />
      <div className="">
        {posts.map((post) => (
          <SiglePostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
