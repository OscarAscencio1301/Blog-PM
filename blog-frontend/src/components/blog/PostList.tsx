import { FC } from "react";
import { Subtitle } from "../ui/Subtitle";
import { SiglePostCard } from "./SiglePostCard";

interface PropsPost {
  subtitle?: boolean;
}

export const PostList: FC<PropsPost> = ({ subtitle = true }) => {
  return (
    <div className="flex flex-col">
      {subtitle && <Subtitle text="Todas las entradas" />}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
      </div>
    </div>
  );
};
