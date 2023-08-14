import "./intro.scss";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,

} from "react-icons/fa";

export const Intro = ({section}) => {
  return (
    <>
      <div className={"intro "+section } id="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="docs/apps/myPic.png" />
          </div>

          <div className="socialMedia " >
            <span>
              <FaInstagram className="icon iconInstagram" />
            </span>
            <span>
              <FaFacebook className="icon iconFacebook" />
            </span>
            <span>
              <FaLinkedin className="icon iconLinkedIn" />
            </span>
            <span>
              <FaGithub className="icon iconGitHub" />
            </span>
          </div>
        </div>

        <div className="right">
          <div className="container">
            <h2>Hi there 👋🏾, I'm</h2>
            <h1 className="name">Kofi gyan</h1>
            <div className="title">
              <h3> {"a  "} </h3>
              <span>
                <Typewriter
                  options={{
                    strings: [" software developer", " UI/UX designer", "mobile app developer"],
                    autoStart: true,
                    delay: 75,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
          <a href="#portfolio">
            <img src="docs/down.png"></img>
            {/* <FaArrowDown className="arrow" color='white'/> */}
          </a>
        </div>
      </div>
    </>
  );
};
