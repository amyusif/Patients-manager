import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IconsContainer } from "../../Styled/Topbar";

const IconList = () => {
  return (
    <IconsContainer>
      <Link to="/notifications">
        <RiNotification4Line />
      </Link>
      <Link to="/settings">
        <VscSettingsGear />
      </Link>
      <Link to="/profile">
        <BiUserCircle />
      </Link>
    </IconsContainer>
  );
};

export default IconList;
