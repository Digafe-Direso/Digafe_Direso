import React from 'react'
import { Link } from 'react-router-dom';
const MoreAbout = () => {
  return (
    <div>
      <div className="DigafeMe"><h1>About Me</h1></div>
    <div className="aboutMore">
        <div className="AboutMe">
            My name is Digafe Direso, a Computer Science student at Arba Minch University 
            with a focus on cybersecurity and web development. I work on improving digital
             security and developing secure, efficient, and user-friendly websites. I am learning 
             to apply practical knowledge in system protection and web technologies. My goal is to build
              a strong career in cybersecurity and web development, contributing to the advancement of 
              reliable and safe digital solutions.
 <div className="back-nav">
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
        </div>
        <div className="AboutMEimg">
            <img src="assets/images/Digafe1.png" alt="Digafe Direso"></img>
        </div>
    </div>
    </div>
  )
}

export default MoreAbout;
