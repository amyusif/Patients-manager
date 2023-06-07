import React from "react";
import image from './medical.png'
import './Logo.scss'

const SidebarLogo = () => {
  return (
    <div className="logo">
      <img src={image} alt="hidden" />
      <div className="text">
        <h5>Patient </h5>
        <span>Management</span>
      </div>
    </div>
  );
};

export default SidebarLogo;
