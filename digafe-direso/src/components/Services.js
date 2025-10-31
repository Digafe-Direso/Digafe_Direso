// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h1>What I Do</h1>
          </div>
          <div className="col-8">
            <div className="sevice1">
              <h1>0/1 Network-Security</h1>
              <br />
              <p>
                I focus on protecting systems through encryption, monitoring, risk prevention, and building strong, secure networks
              </p>
            </div>
            
            <div className="sevice2">
              <h1>0/2 Development</h1>
              <br />
              <p>
                I design and build responsive, dynamic websites and applications, combining frontend and backend technologies for seamless, user-friendly digital experiences.
              </p>
            </div>
            
            <div className="sevice3">
              <h1>0/3 Marketing</h1>
              <br />
              <p>
                I help businesses grow by building engaging, efficient, and secure web applications that enhance user experience and drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;