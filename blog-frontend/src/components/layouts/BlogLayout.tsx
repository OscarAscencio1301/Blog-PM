import { FC, PropsWithChildren } from "react";
import { Navbar } from "../global/Navbar";
import { Footer } from "../global/Footer";

export const BlogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
