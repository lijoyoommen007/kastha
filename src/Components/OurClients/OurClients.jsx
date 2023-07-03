import React from 'react'
import clientData from "./ourclient.json"
import "./clientstyle.css"
import { Slide, Zoom } from 'react-awesome-reveal';
const ClientSection = () => {
    return (
      <section id="clients" className="clients">
        <div className="container">
        <Slide direction='left'>
          <div className="section-title" data-aos="fade-up">
            <h2>Our <strong>Clients</strong></h2>
            <p className='desc'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          </Slide>
          <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">
            {clientData.map((client, index) => (
              <div className="col-lg-3 col-md-4 col-xs-6" key={index}>
                <div className="client-logo">                
                <Zoom>
                  <img src={client.logo} className="img-fluid" alt={client.name} />             
                   </Zoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientSection;
  