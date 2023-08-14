import "./testimonials.scss";
export const Testimonials = ({section}) => {
  return (
    <>
      <div className={"testimonials center "+section} id="testimonials">
        <h1>Testimonials</h1>
        <div
          style={{
            position: "absolute",
            display: "flex",
            height: "100%",
            widows: "100%",
            zIndex: "0",
            opacity: 0.5,
            scale:2,
            flex: 1,
          }}
        >
          <img style={{ flex: 1 }} src="docs/testimonials-bg.png"></img>
        </div>
        <div className="container ">
          <div className="testimony">
            <div className="imageContainer">
              <img src="docs/arrow.png" className="arrow" />
              <div className="profileImage">
                <img src="docs/mypic.png" className="pImage" />
              </div>
              <img src="docs/youtube.png" className="platfoemLogos" />
            </div>
            <div className="description">
              <p>
                something that i would love to talk about koala, like a
                recommendation sort of
              </p>
              <div className="details">
                <h2>Mark Aggrey</h2>
                <h3>Co-fonder of Insider</h3>
              </div>
            </div>
          </div>
          <div className="testimony">
            <div className="imageContainer">
              <img src="docs/arrow.png" className="arrow" />

              <div className="profileImage">
                <img src="docs/mypic.png" className="pImage" />
              </div>
              <img src="docs/youtube.png" className="platfoemLogos" />
            </div>
            <div className="description">
              <p>
                something that i would love to talk about koala, like a
                recommendation sort of
              </p>
              <div className="details">
                <h2>Mark Aggrey</h2>
                <h3>Co-fonder of Insider</h3>
              </div>
            </div>
          </div>
          <div className="testimony">
            <div className="imageContainer">
              <img src="docs/arrow.png" className="arrow" />
              <div className="profileImage">
                <img src="docs/mypic.png" className="pImage" />
              </div>
              <img src="docs/youtube.png" className="platfoemLogos" />
            </div>
            <div className="description">
              <p>
                something that i would love to talk about koala, like a
                recommendation sort of
              </p>
              <div className="details">
                <h2>Mark Aggrey</h2>
                <h3>Co-fonder of Insider</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
