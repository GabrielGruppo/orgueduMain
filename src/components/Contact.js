import React, { useState } from 'react';
import styles from './Contact.module.css';
import contactImg from '../images/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSubmitStatus, setFormSubmitStatus] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form data submitted:', formData);

    setFormSubmitStatus('Form submitted successfully!');
  };

  return (
    <section className={styles.contact} id="contact">
      <h1 className='heading'>contact us</h1>

      <div className={styles.row}>
        <div className={styles.image}>
          <img src={contactImg} alt />
        </div>
        <form onSubmit={handleSubmit}>
          <h3>send us a message</h3>
          <input
            type="text"
            placeholder="name"
            className={styles.box}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="email"
            className={styles.box}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="phone number"
            className={styles.box}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="message"
            className={styles.box}
            cols="30"
            rows="10"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className='btn'>
            <span className='text1'>send message</span>
            <span className='text2' aria-hidden="true">
              send message
            </span>
          </button>
        </form>
        {formSubmitStatus && <p>{formSubmitStatus}</p>}
      </div>
    </section>
  );
};

export default Contact;
