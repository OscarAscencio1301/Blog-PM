import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-primary text-white p-5 lg:px-20 sticky top-0 z-50">
      <Link to="/" className="text-2xl">Blog PM</Link>
    </div>
  );
};
