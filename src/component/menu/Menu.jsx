import React, { useState } from "react";
import "./menu.scss";
import { MenuList } from "../menuList/MenuList";

export const Menu = ({ openMenu, setOpenMenu,currentSection,setCurrentSection }) => {
  const [selectedId, setSelectedId] = useState(1);



  return (
    <div className={"menu " + (openMenu && "active")}>
      <div className="container">
        <ul>
          <MenuList
            onClick={() => {
              setOpenMenu(false);
              setSelectedId(1);
              currentSection={currentSection}
              setCurrentSection('intro');
            }}
            setClose={setOpenMenu}
            currentSection={currentSection}
            linkName="Intro"
            newClass={ currentSection==="intro" ? "selected" : ""}
          />
          <MenuList
            setClose={setOpenMenu}
            currentSection={currentSection}
            linkName="Portfolio"
            onClick={() => {
              setOpenMenu(false);
              setSelectedId(2);
              setCurrentSection('portfolio');
              console.log(selectedId);
            }}
            newClass={ currentSection==="portfolio" ? "selected" : ""}
          />
          <MenuList
            setClose={setOpenMenu}
            newClass={ currentSection==="works" ? "selected" : ""}
            currentSection={currentSection}
            linkName="Works"
            onClick={() => {
              setOpenMenu(false);
              setSelectedId(3);
              setCurrentSection('works');
              console.log(selectedId);
            }}
          />
          <MenuList
            setClose={setOpenMenu}
            newClass={ currentSection==="testimonials" ? "selected" : ""}
            currentSection={currentSection}
            linkName="Testimonials"
            onClick={() => {
              setOpenMenu(false);
              setSelectedId(4);
              setCurrentSection('testimonials');
              console.log(selectedId);
            }}
          />
          <MenuList
            newClass={ currentSection==="contacts"? "selected" : ""}
            setClose={setOpenMenu}
            currentSection={currentSection}
            linkName="Contacts"
            onClick={() => {
              setOpenMenu(false);
              setSelectedId(5);
              setCurrentSection('contacts');
              console.log(selectedId);
            }}
          />
        </ul>
      </div>
    </div>
  );
};
