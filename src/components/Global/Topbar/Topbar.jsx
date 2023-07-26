import React from "react";
import SearchInput from "../../Input/SearchInput";
import FullDate from "../../CurrentDate/FullDate";
import IconList from "../../IconList/IconList";
import { TopBox } from "../../../Styled/Topbar";

const Topbar = () => {
  return (
    <TopBox>
      <SearchInput />
      <FullDate />
      <IconList />
    </TopBox>
  );
};

export default Topbar;
