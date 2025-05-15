import React, { useState } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import '../index.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        e.target.reset();
      } else {
        console.error('Server error:', data);
        setStatus('❌ Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('❌ Could not connect to the server.');
    }

    setSending(false);
  };

  return (
    <>
      <ParticlesBackground />

      <section className="contact-two-col">
        <div className="contact-form-card">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
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
