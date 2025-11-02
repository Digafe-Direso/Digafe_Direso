// src/components/RecentWork.js
import React, { useState, useEffect } from 'react';

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const certificates = [
    '/assets/certificates/DigafeAnd.png',
    '/assets/certificates/Digafe-AI.png',
    '/assets/certificates/Digafe-M.png',
    '/assets/certificates/Digafep.png'
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="recent-work">
      <div className="container mt-5">
        <div className="row">
          <div className="">
            <h1>My Recent Work</h1>
            <p>
              I've worked on fullstack web development projects, building dynamic, responsive applications while ensuring system security.
              My portfolio includes practical solutions that enhance user experience and protect digital systems. I continuously upgrade my skills through
              certificates and hands-on projects, combining coding, network security, and innovative problem-solving in real-world applications.
            </p>
          </div>
        </div>
        
        <div className="recentimg">
          <div className="recentimg1">
            <h1>Recent-Certificates</h1>
            
            <div className="slider">
              <div className="slides">
                {certificates.map((cert, index) => (
                  <img
                    key={index}
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    className={index === currentIndex ? 'active' : ''}
                    onClick={() => openLightbox(cert)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="recentimg2">
            <h1>Recent-Projects</h1>
            <img src="/assets/images/nature-27.jpg" alt="Project" />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged Certificate" />
        </div>
      )}
    </section>
  );
};

export default RecentWork;