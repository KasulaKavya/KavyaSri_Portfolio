// pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';

const projects = [
  {
    title: 'DocuQuery AI – Intelligent Document Q&A Platform',
    description: 'Developed a full-stack document intelligence platform using React.js and FastAPI to allow users to upload PDFs and query content using GPT-based models. Integrated vector search with Retrieval-Augmented Generation (RAG) for accurate answers. Used Hugging Face Transformers and local embeddings to simulate human-like contextual understanding of documents.',
    tech: ['React', 'FastAPI', 'Python', 'HuggingFace', 'RAG', 'Sentence Transformers', 'PDF parsing'],
    github: 'https://github.com/KasulaKavya/docuquery-ai'
  },
  {
    title: 'InsightPulse – AI-Powered Retail Analytics Dashboard',
    description: 'Designed and built an AI-powered dashboard for retail performance monitoring using React.js, Chart.js, and FastAPI. Integrated Prophet for revenue forecasting and a GPT-based chatbot for querying uploaded CSV datasets. Enabled time-based KPIs, gender/customer analysis, and drill-down visualization.',
    tech: ['React.js', 'FastAPI', 'Pandas', 'Scikit-learn', 'Prophet', 'GPT'],
    github: 'https://github.com/KasulaKavya/InsightPulse-Retail-Dashboard'
  },
  {
    title: 'Q&A Chatbot with HuggingFace Transformers',
    description: 'Built a QA chatbot using DistilBERT from HuggingFace to answer user questions based on custom context. Designed for academic and knowledge base scenarios. Showcased understanding of NLP pipeline, context-question matching, and tokenized input/output flow.',
    tech: ['Python', 'HuggingFace Transformers', 'DistilBERT', 'Streamlit'],
    github: 'https://github.com/KasulaKavya/Q-A-AI-Chatbot-using-HuggingFace-Transformers'
  },
  {
    title: 'Facial Recognition System',
    description: 'Implemented a real-time facial recognition application using TensorFlow, FaceNet, and OpenCV. Designed deep learning pipeline to convert faces into embedding vectors, matched them via cosine similarity, and enabled real-time video stream detection for identity verification and surveillance use cases.',
    tech: ['TensorFlow', 'OpenCV', 'FaceNet', 'Python'],
    github: 'https://github.com/KasulaKavya/Facial-Recognition'
  }
];

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <section className="projects">
        <motion.h2
          className="glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Creative Projects
        </motion.h2>

        <div className="hologrid">
          {projects.map((proj, index) => (
            <motion.div
              className="holo-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="holo-frame">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <span className="holo-tags">{proj.tech.join(' | ')}</span>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
