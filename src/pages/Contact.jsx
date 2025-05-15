import React, { useState } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import emailjs from '@emailjs/browser';
import '../index.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    emailjs.sendForm(
      'service_qel6iun',   
      'template_pld8twp',    
      e.target,
      'bo-1GIU7Zs-5hCIfM'      
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setSending(false);
    });
  };

  return (
    <>
      <ParticlesBackground />

      <section className="contact-two-col">
        <div className="contact-form-card">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} name="contact">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="from_name" id="name" required />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="from_email" id="email" required />
            </div>
            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>

            {status && (
              <p style={{ marginBottom: '1rem', color: status.startsWith('✅') ? 'lightgreen' : 'salmon' }}>
                {status}
              </p>
            )}

            <button type="submit" className="send-btn" disabled={sending}>
              {sending ? 'Sending...' : 'Send ✉️'}
            </button>
          </form>
        </div>

        <div className="thankyou-card-modern">
          <h2>Thank You.</h2>
          <p>We’ll be in touch shortly!</p>
          <button className="next-btn">Next →</button>
        </div>
      </section>
    </>
  );
}

export default Contact;
