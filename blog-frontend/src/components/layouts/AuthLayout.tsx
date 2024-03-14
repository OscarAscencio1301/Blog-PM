import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen bg-hero bg-blue-500/90 relative top-0 bg-cover flex-col gap-5 bg-center flex justify-center items-center">
      <Link to="/" className="text-5xl my-5 text-white hover:underline hover:scale-105 transition-all">
        Blog PM
      </Link>
      <div className="bg-white/80 w-3/4 lg:w-1/4 border  text-black p-4 rounded-lg flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};
