import React from 'react';
import { motion } from 'framer-motion';
import { experience } from './ResumeData'; // full JSON instead of shallow data
import ParticlesBackground from '../components/ParticlesBackground';

function Experience() {
  return (
    <>
      <ParticlesBackground />
      <section className="experience">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Experience</motion.h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <motion.div
              className="timeline-entry"
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-icon">💼</div>
              <div className="timeline-content">
                <h3>{exp.role} @ {exp.company}</h3>
                <p><em>{exp.duration}</em></p>
                <ul>
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
