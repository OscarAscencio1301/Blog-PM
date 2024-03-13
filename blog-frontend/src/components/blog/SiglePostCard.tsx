import { Link } from "react-router-dom";
import image from "/post.png";

export const SiglePostCard = () => {
  return (
    <Link
      to={"/posts/5"}
      className="flex gap-5 p-3 cursor-pointer hover:scale-110 transition-all duration-10000"
    >
      <img src={image} alt="Post" className="object-cover w-1/3 rounded-lg" />
      <div className="flex flex-col flex-1">
        <h3 className="text-2xl">Nueva Entrada</h3>
        <h4 className="text-lg text-primary italic">Autor</h4>
        <h4 className="text-sm font-light text-gray-600">Hace 3 horas</h4>
        <span className="font-light text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          soluta nihil illum sapiente! Nobis, voluptatibus.
        </span>
      </div>
    </Link>
  );
};
