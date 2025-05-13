import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import '../index.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    fetch('http://localhost:3001/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);
        e.target.reset();
      })
      .catch(err => {
        console.error('Submission error:', err);
        alert('Something went wrong. Please try again.');
      });
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
            <button type="submit" className="send-btn">Send ✉️</button>
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
