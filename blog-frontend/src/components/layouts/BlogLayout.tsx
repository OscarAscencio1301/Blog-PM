import { FC, PropsWithChildren } from "react";
import { Toaster } from 'sonner'
import { Navbar } from "../global/Navbar";
import { Footer } from "../global/Footer";
import { Sidebar } from "../global/Sidebar";

export const BlogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
      <Toaster position="top-right" richColors/>
        <Sidebar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};
