import { useEffect } from "react";
import { BlogLayout } from "../components/layouts/BlogLayout";

const AddPostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogLayout>
      <div className="flex p-5 lg:p-20 gap-12 flex-1 items-end">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-5xl">Agregar Entrada</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>Titulo</label>
              <input
                type="text"
                className="border outline-none p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Autor</label>
              <input
                type="text"
                className="border outline-none p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Descripción</label>
              <textarea
                className="border outline-none p-2 rounded-lg"
                rows={4}
              ></textarea>
            </div>
            <button className="bg-primary hover:bg-blue-950 text-white py-3 my-3 px-12 rounded-lg">
              Crear Entrada
            </button>
          </form>
        </div>
        <div className="bg-gray-600/10 w-1/3 h-96 rounded-lg flex flex-col gap-6 justify-center items-center">
          <h2 className="text-gray-600/50 text-4xl">Imagen</h2>
          <h2 className="text-gray-600/50 text-4xl">1000 X 825</h2>
        </div>
      </div>
    </BlogLayout>
  );
};

export default AddPostPage;
