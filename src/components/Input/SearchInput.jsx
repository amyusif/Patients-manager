import React from "react";
import { BsSearch } from "react-icons/bs";
import { Search, SearchBar } from "../../Styled/Topbar";

const SearchInput = () => {
  return (
    <SearchBar>
      <Search placeholder="Search" />
      <BsSearch className="text-slate-400" />
    </SearchBar>
  );
};

export default SearchInput;
