import { Link } from "react-router-dom";

export const Sponsor = () => {
  return (
    <div className="bg-secondary p-5 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-20 mt-6">
      <div className="flex flex-col gap-3 flex-1 text-center lg:text-left">
        <h2 className="text-3xl font-bold">Crea Entradas para tu Blog</h2>
        <h3 className="text-lg font-light">
          Puedes configurar entradas para tu blog
        </h3>
      </div>
      <div className="flex flex-1 justify-center text-center gap-5">
        <Link
          to="/posts/new"
          className="bg-primary hover:bg-blue-950 text-white py-3 px-12 rounded-lg"
        >
          Crear Entrada
        </Link>
      </div>
    </div>
  );
};
