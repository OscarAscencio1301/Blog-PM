import { ArrowIcon } from "../../icons/ArrowIcon";

export const HeroBlog = () => {
  return (
    <div className="h-screen bg-hero relative top-0 bg-cover flex-col gap-5 bg-center flex justify-center items-center text-white">
      <h1 className="text-7xl -mt-20">Blog PM</h1>
      <h3 className="text-4xl font-light">Bienvenido</h3>
      <a href="/#posts" className="hover:scale-110 transition-all absolute bottom-32"><ArrowIcon /></a>
    </div>
  );
};
