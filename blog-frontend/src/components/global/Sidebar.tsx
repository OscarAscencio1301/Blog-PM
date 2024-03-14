import { FC, useEffect } from "react";
import { useUI } from "../../hooks/useUI";
import { Link } from "react-router-dom";

interface PropsSidebar {}

export const Sidebar: FC<PropsSidebar> = ({}) => {
  const { isOpenSidebar, changeStatusSidebarAction } = useUI();

  useEffect(() => {
    if (isOpenSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenSidebar]);

  return (
    <>
      {/* {isModalOpenSidebar && ( */}
      <div
        className={`w-full h-full bg-black/5 z-30 fixed top-0 left-0 block lg:hidden transition-all Z-60  ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={changeStatusSidebarAction}
      >
        <div
          className={`w-3/4 h-screen absolute left-0 flex flex-col gap-6 items-center bg-primary text-white p-10 overflow-y-auto`}
        >
          <h2>Oscar Ascencio</h2>
          <ol className="flex flex-col gap-8">
            <h3 className="text-xl font-bold uppercase mt-3 text-center">
              Menú
            </h3>
            <ol className="flex flex-col gap-5 text-center xl:text-left">
              <a
                href="/#posts"
                className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer"
              >
                Entradas
              </a>
              <a
                href="/#posts"
                className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer"
              >
                Últimas Entradas
              </a>
              <Link
                to="/posts"
                className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer"
              >
                Administar Entradas
              </Link>
              <Link
                to="/post/config"
                className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer"
              >
                Agregar Entrada
              </Link>
            </ol>
          </ol>
        </div>
      </div>
    </>
  );
};
