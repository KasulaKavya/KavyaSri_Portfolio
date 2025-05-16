// components/Footer.jsx
import React from 'react';
import '../index.css'; // Import the custom CSS

function Footer() {
  return (
    <footer className="custom-footer">
      <p>© 2025 Kavya Sri K. Built with React. Hosted on Vercel.</p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/kavya-sri-b25707200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/KasulaKavya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
