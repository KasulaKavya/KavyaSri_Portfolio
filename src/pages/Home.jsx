// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import '../index.css';

function Home() {
  return (
    <div className="home-container">
      <ParticlesBackground />

      <div className="hero-glass" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', color: '#f5f5f5', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#ffffff' }}
        >
          Hi, I'm Kavya Kasula
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#e0e0e0' }}
        >
          A Senior Software Engineer crafting elegant web experiences & intelligent systems.
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
           <a
            href="/projects"
            style={{ color: '#121212', background: '#00c896', padding: '0.6rem 1.4rem', borderRadius: '8px', marginRight: '1rem', textDecoration: 'none', fontWeight: '600' }}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            style={{ color: '#121212', background: '#00c896', padding: '0.6rem 1.4rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <div className= "about">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1rem' }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ lineHeight: '1.8', fontSize: '1.05rem' }}
        >
          Detail-oriented Software Engineer with 4+ years of experience designing enterprise-grade software,
          cloud-native architectures, and intelligent automation pipelines. Proficient in Java, Python, Spring Boot,
          Django, React.js. Experienced in ML/AI with TensorFlow, GPT, and NLP techniques.
        </motion.p>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ lineHeight: '1.8', fontSize: '1.05rem', marginTop: '1rem' }}
        >
          Adept in Agile methodologies, CI/CD pipelines, DevOps practices, and collaborative problem solving. Passionate
          about building scalable backend systems and engaging user experiences that drive impact in healthcare,
          finance, and education.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
