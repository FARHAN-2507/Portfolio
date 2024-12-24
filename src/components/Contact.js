import emailjs from 'emailjs-com';
import { useState } from 'react';
import '../styles/Contact.css';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm('service_9k30dzu', 'template_xtdfzgw', e.target, 'ivExCRuil7Yt76rIs')
      .then((result) => {
        console.log(result.text);
        alert('Message sent!');
      }, (error) => {
        console.log(error.text);
      });

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container text-center">
        <h2>Contact</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>

        {/* Contact Details Section */}
        <div className="contact-details mt-5">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span> farhanakthar99@gmail.com</span>
          </div>
          <div className="contact-item">
          <i className="fas fa-phone fa-flip-horizontal"></i>
            <span> +91 8287713161</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
