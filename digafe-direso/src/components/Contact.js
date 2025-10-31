// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact">
      <div className="contact-container">
        <div className="letstalk">Let's Talk</div>
        <div className="contact-form">
          <div className="call-email">
            <p>E-mail: digafe871@gmail.com</p>
            CALL: +251777965669
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br /><br />

            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br /><br />

            <textarea
              className="input"
              id="message"
              name="message"
              rows="5"
              cols="40"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <br /><br />

            <button className="submitform" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;