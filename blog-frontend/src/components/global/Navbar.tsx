import { Link } from "react-router-dom";
import { Search } from "./Search";
import { MenuIcon } from "../../icons/MenuIcon";

export const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between items-center text-white p-5 lg:px-20 sticky top-0 z-50">
      <Link to="/" className="text-2xl flex-1">
        Blog PM
      </Link>
      <div className="hidden lg:block">
        <Search />
      </div>
      <div className="block lg:hidden">
        <MenuIcon />
      </div>
    </div>
  );
};
