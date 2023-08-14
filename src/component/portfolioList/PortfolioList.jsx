import React from "react";
import "./portfolioList.scss";

export const PortfolioList = ({
  title,
  selectedItem,
  setSelectedItem,
  itemId,
}) => {
  return (
    <li
      className={"bg portfolioList " + (selectedItem === itemId && "active")}
      onClick={() => {
        setSelectedItem(itemId);
        console.log("item id is "+itemId)
        }}     
    >
      {title}
    </li>
  );
};
