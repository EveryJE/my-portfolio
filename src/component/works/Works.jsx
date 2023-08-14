 import { useEffect, useState } from "react";
 import "./works.scss";
 export const Works = ({section}) => {
  const [way, setWay] = useState(null);
  const [next, setNext] = useState(0);
  const [last,setLast] =useState(0);

 const onArrowClick=(ways)=>{
    if(next<300 && next >=0){
        ways==="right" && next <=100 && setNext(next +100); 
        ways==="left" && next > 0 && setNext(next - 100);
    }
 }
  return (
    <>
      <div className={"works "+ section} id="works">
        <div className="slider" style={{ transform: `translateX(-${next}vw)` }}>
          <div className="outerContainer">
            <div className="innerContainer">
              <div className="left">
                <div className="imageContainer">
                  <image src="" />
                  <h2>Web Design</h2>
                  <p>lorem12 uijsficjijoi;j</p>
                </div>
              </div>
              <div className="right">
                <div className="imageContainer">
                    <img src="docs/image1.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="outerContainer">
            <div className="innerContainer">
              <div className="left">
                <div className="imageContainer">
                  <image src="" />
                  <h2>Something</h2>
                  <p>lorem12 uijsficjijoi;j</p>
                </div>
                <div className="contentContainer"></div>
              </div>
              <div className="right">
                <div className="imageContainer"></div>
              </div>
            </div>
          </div>
          <div className="outerContainer">
            <div className="innerContainer">
              <div className="left">
                <div className="imageContainer">
                  <image src="" />
                  <h2>Mobile design</h2>
                  <p>lorem12 uijsficjijoi;j</p>
                </div>
                <div className="contentContainer"></div>
              </div>
              <div className="right">
                <div className="imageContainer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`leftArrow ${next ===0 ? "faint" : ""}`}>

          <img
            src="docs/arrow.png"
            onClick={() => {
              return onArrowClick("left");
            }}
          />
        </div>
        <div className={`rightArrow ${next>=200 && "faint"}`}>
          <img
            src="docs/arrow.png"
            onClick={() => {
              return onArrowClick("right");
            }}
          />
        </div>
      </div>
    </>
  );
};
