import React from "react";
import "./menuList.scss";

export const MenuList = ({ linkName ,onClick,newClass,currentSection}) => {
  return (
    <div className={"menuList "+newClass} >
      <span></span> 
      <li>
      <a href={"#" + currentSection} onClick={onClick}>{linkName}</a>
      </li>
    </div>
  );
};
