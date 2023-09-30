import { useCallback, useEffect, useState } from "react";
import { PortfolioList } from "../portfolioList/PortfolioList";

import {
  FaInternetExplorer,
  FaGithub,
  FaGooglePlay,
  FaGlobe,
  FaAppStore,
  FaReact,
  FaExpo,
} from "react-icons/fa";
// import "./portfolio.scss";
import "./portfolios.scss";

import {
  featuresList,
  webAppList,
  mobileAppList,
  designList,
  contentList,
} from "../portfolioList/listData";



export const Portfolio = ({section}) => {
  const [selectedItem, setSelectedItem] = useState(2);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    switch (selectedItem) {
      case 0:
        setSelectedData(featuresList);
        break;
      case 1:
        setSelectedData(webAppList);
        break;
      case 2:
        setSelectedData(mobileAppList);
        break;
      default:
        setSelectedData(featuresList);
    }
  }, [selectedItem]);

  const List = [
    { title: "Features" },
    { title: "Web Apps" },
    { title: "Mobile App" },

  ];

  return (
    <>
      <div className={"portfolio " +section} id="portfolio">
        <h1>PORTFOLIO</h1>
        <div className="features">
          <ul>
            {List.map((list, key) => (
              <PortfolioList
                key={key}
                title={list.title}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                itemId={key}
              />
            ))}
          </ul>
        </div>
        <div className="featuresContainer ">
          {selectedData.map((d, key) => (
            <div className="item" key={key}>
             <img src={d.ImgUrl}></img>
              <div className="item-background"></div>
             
              <div className="icons">
                {selectedItem === 2 ? (
                  <a href="#" onClick={()=>{window.open(d. expoUrl, '_blank');}}>
                  <FaAppStore className="icon internet-icon" />
                  
</a>
                ) : (
                  <FaGlobe className="icon internet-icon" />
                )}

                <FaGithub className="icon github-icon" />
                {selectedItem === 2 && (
                  <FaGooglePlay className="icon playstore-icon" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            height: "100%",
            widows: "100%",
            zIndex: "0",
            opacity: 0.25,
            flex: 1,
          }}
        >
          <img style={{ flex: 1 }} src="docs/middleShape.png"></img>
        </div>
      </div>
    </>
  );
};
