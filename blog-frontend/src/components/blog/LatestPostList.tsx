import { SiglePostCard } from "./SiglePostCard";

export const LatestPostList = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl py-2 font-bold text-center lg:text-left text-blue-900">Últimas entradas</h3>
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
