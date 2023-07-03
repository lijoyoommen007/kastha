import React from 'react';
import { Fade,Slide, Zoom } from 'react-awesome-reveal';

function AboutPage() {
  return (
    <Fade triggerOnce={true} >
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <Zoom>
              <div className="about-img">
                <img src="/img/about-bg.jpg" alt="" />
              </div>
            </Zoom>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <Slide direction="left">
              <h3>ABOUT KASTHA DOORS</h3>
            </Slide>
            <Slide direction="left">
              <p className="fst-italic">
                STRATEGY-LED DESIGN IN <br /> EVERY DETAIL
              </p>
            </Slide>
            <Slide direction="left" >
              <ul>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
            </Slide>
            <Slide direction="left">
              <p style={{ fontWeight: 100, fontFamily: 'sans-serif', fontSize: '16px' }}>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}


export default AboutPage;
