// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="home-img col-md-4 d-md-none">
            <img 
              src="/assets/images/homeimg.jpg" 
              alt="Digafe Direso" 
            />
          </div>
          
          <div className="col-md-4 biography">
            <p>
              Hi, I'm Digafe Direso. I'm a web developer and network security enthusiast who enjoys solving problems and creating simple,
              practical solutions that work in real life. I love writing clean code, exploring new technologies, and turning my ideas into projects that truly matter.
            </p>
            <br />
            <h6>SKILLS</h6>
            <p>Web Development UI & UX, Network-security and SEO-Management</p>
            <br />
            <h6>CONTACT</h6>
            <br />
            
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <a href="https://www.twitter.com/daati871">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a href="https://www.facebook.com/daati871">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a href="https://www.instagram.com/daati871">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a href="https://www.linkedin.com/in/daati871">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="home-img col-md-4 d-md-block d-sm-none fimg">
            <img 
              src="assets/images/homeimg.jpg"
              alt="Digafe Direso" 
            />
          </div>

          <div className="col-md-4 digafeh">
            <button className="h1">Digafe.D</button>
            <p>
              I'm Digafe Direso, a Computer Science student driven by curiosity and creativity. I love exploring algorithms, security, and systems, but my real goal is to build tools that help people and bring positive change.
            </p>
            <div className="see-more">
          <Link to="/MoreAbout" className="see-more-btn">
          See More About Me →
        </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About ;