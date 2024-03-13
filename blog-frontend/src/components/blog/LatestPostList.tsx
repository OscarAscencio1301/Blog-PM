import { Subtitle } from "../ui/Subtitle";
import { SiglePostCard } from "./SiglePostCard";

export const LatestPostList = () => {
  return (
    <div className="flex flex-col">
      <Subtitle text="Últimas entradas" />
      <div className="">
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
        <SiglePostCard />
      </div>
    </div>
  );
};
