import React from 'react';
import "./doorStyles.css";
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import BackgroundAnimation from './background';

function Doors({ data }) {
  return (
    <>
    <BackgroundAnimation/>
     <Fade triggerOnce>
        <section style={{ width: "100vw", padding: "0px 0", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img src={data.headingData.bgImg} style={{ width: "100%" }} alt="" />
            <h1 style={{ position: "absolute", top: "40%", left: 0, width: "100%", textAlign: "center", color: "#ffa50a", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px", fontFamily: "fantasy" }}>{data.headingData.heading}</h1>
          </div>
        </section>
      </Fade>
      <Slide>
        <section id="cta" className="cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-left text-lg-left">
                <h3>{data.headingData.desc}</h3>
                <ul>
                  <li>
                    <p style={{ marginTop: "1rem" }}>{data.headingData.point1}</p>
                  </li>
                  <li>
                    <p style={{ marginTop: "1rem" }}>{data.headingData.point2}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      {data.data.map((product, index) => (
        <section key={index} className="container">
          <div>
            <h1 className="hover-underline-animation">{product.title}</h1>
          </div>
          <div className="team-grid">
            <div className="container">
              <div style={{ flexWrap: 'wrap' }} className="people d-flex justify-content-around">
                {product.products.map((items, index) => {
                  return (
                    <Zoom >
                      <div className="item">
                        <div className="box" style={{ backgroundImage: `url(${items.bgImg})` }}>
                          <div className="cover">
                              <h3 className="name">{items.title}</h3>
                              <h3 className="hoverName">{items.title}</h3>
                              <p className="title">{items.desc}</p>
                          </div>
                        </div>
                      </div>

                    </Zoom>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Doors;
