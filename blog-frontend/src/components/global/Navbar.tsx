import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between items-center text-white p-5 lg:px-20 sticky top-0 z-50">
      <Link to="/" className="text-2xl flex-1">
        Blog PM
      </Link>
      <Search />
    </div>
  );
};
