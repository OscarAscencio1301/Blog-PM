import { SiglePostCard } from "./SiglePostCard";

export const PostList = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl py-2 text-center lg:text-left font-bold text-blue-900">
        Todas las entradas
      </h3>
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
