import { useState } from "react";
import { SearchIcon } from "../../icons/SearchIcon";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [isSearch, setisSearch] = useState(false);
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const onSubmitSearch = () => {
    if (term.trim().length === 0) return;
    navigate(`/search/${term}`);
  };

  const changeTerm = (termNew: string) => {
    setTerm(termNew);
  };

  return (
    <div>
      {isSearch ? (
        <input
          type="search"
          className="w-full bg-transparent border-b outline-none text-white text-lg flex-1 min-w-80"
          placeholder="Buscar entradas"
          onChange={(e) => changeTerm(e.target.value)}
          value={term}
          onKeyDown={(e) => e.key === "Enter" && onSubmitSearch()}
        />
      ) : (
        <div className="cursor-pointer" onClick={() => setisSearch(true)}>
          <SearchIcon />
        </div>
      )}
    </div>
  );
};
