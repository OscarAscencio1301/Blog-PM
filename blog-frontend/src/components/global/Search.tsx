import { useState } from "react";
import { SearchIcon } from "../../icons/SearchIcon";

export const Search = () => {
  const [isSearch, setisSearch] = useState(false);
  const [term, setTerm] = useState("");

  const changeTerm = (termNew: string) => {
    setTerm(termNew);
  };

  return (
    <>
      {isSearch ? (
        <input
          type="search"
          className="w-full bg-transparent border-b outline-none text-white text-lg flex-1"
          placeholder="Buscar entrada"
          onChange={(e) => changeTerm(e.target.value)}
        />
      ) : (
        <div className="cursor-pointer" onClick={() => setisSearch(true)}>
          <SearchIcon />
        </div>
      )}
    </>
  );
};
