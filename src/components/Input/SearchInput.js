import React from "react";
import "./Search.scss";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="merge-search">
      <input type="text" placeholder="Search" />
      <BsSearch className="text-slate-400"/>
    </div>
  );
};

export default SearchInput;
