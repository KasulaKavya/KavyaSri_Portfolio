// pages/Skills.jsx
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { skills } from './ResumeData';

function SkillsWithIcons() {
  return (
    <>
      <ParticlesBackground />
      <section className="skills-section">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group}>
            <h3>{group}</h3>
            <div className="skill-grid">
              {list.map((item, idx) => (
                <div key={idx} className="skill-card">
                  <img src={item.icon} alt={item.name} title={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default SkillsWithIcons;
