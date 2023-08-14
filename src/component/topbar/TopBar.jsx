import "./topBar.scss";
import { FaEnvelope, FaUser } from "react-icons/fa";
export const TopBar = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className={"topBar " + (openMenu && "active")}>
        <div className="container ">
          <div className="left">
            <a href="#intro" className="logo">
              koala
            </a>
            <div className="contact">
              <div className="itemContainer">
                <FaUser className="icon" />
                <a href="tel:+233501933699">
                  <span>+233 501 933 699</span>
                </a>
              </div>
              <div className="itemContainer">
                <FaEnvelope className="icon" />
                <a href="mailto:kgyan19lf@gmail.com">
                  <span>kgyan19lf@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
