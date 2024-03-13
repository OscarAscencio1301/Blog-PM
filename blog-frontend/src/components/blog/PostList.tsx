import { FC } from "react";
import { Subtitle } from "../ui/Subtitle";
import { SiglePostCard } from "./SiglePostCard";
import { Post } from "../../interfaces/posts/post.interfaces";

interface PropsPost {
  posts: Post[];
  subtitle?: boolean;
}

export const PostList: FC<PropsPost> = ({ subtitle = true, posts }) => {
  return (
    <div className="flex flex-col">
      {subtitle && <Subtitle text="Todas las entradas" />}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {posts.map((post) => (
          <SiglePostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
