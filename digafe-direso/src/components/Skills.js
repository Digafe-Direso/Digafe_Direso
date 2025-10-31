// src/components/Skills.js
import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const animateSkills = () => {
      const skills = document.querySelectorAll('.progress');
      const percents = document.querySelectorAll('.percent');

      skills.forEach((bar, i) => {
        const target = bar.getAttribute('data-percent');
        bar.style.width = target + '%';

        let count = 0;
        const interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count++;
            percents[i].innerText = count + '%';
          }
        }, 20);
      });
    };

    window.addEventListener('load', animateSkills);
    
    return () => {
      window.removeEventListener('load', animateSkills);
    };
  }, []);

  const skills = [
    { name: 'C++', icon: 'https://img.icons8.com/color/48/c-plus-plus-logo.png', percent: '25' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png', percent: '89' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png', percent: '95' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png', percent: '56' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png', percent: '67' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python.png', percent: '33' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo.png', percent: '55' }
  ];

  return (
    <section>
      <div className="skillcontent">
        <h2>My Language Skills</h2>
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <img src={skill.icon} alt={skill.name} />
          <div className="progress-wrapper">
            <div className="progress-bar">
              <div className="progress" data-percent={skill.percent}></div>
            </div>
            <div className="percent">0%</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;