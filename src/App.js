import { Intro } from "./component/intro/Intro";
import { TopBar } from "./component/topbar/TopBar";
import { Portfolio } from "./component/portfolio/Portfolio";
import { Works } from "./component/works/Works";
import { Testimonials } from "./component/testimonials/Testimonials";
import { Contacts } from "./component/contacts/Contacts";
import "./app.scss";
import { useEffect, useState } from "react";
import { Menu } from "./component/menu/Menu";
import { MenuList } from "./component/menuList/MenuList";
import { MenuButon } from "./component/menuButton/MenuButon";

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  const [currentSection, setCurrentSection] = useState("portfolio");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Intersection threshold (0.5 means 50% of the element is visible)
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll(".sections");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   console.log("selected current section : " + currentSection );
  // }, [currentSection]);

  return (
    <div className="App">
    <MenuButon openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
       <div className="section">
        <Intro  section={"sections"}/>
        <Portfolio section={"sections"}/>
        <Works section={"sections"}/>
        <Testimonials section={"sections"} />
        <Contacts section={"sections"} />
      </div>
    </div>
  );
}

export default App;
