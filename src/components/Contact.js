import React, { useState } from 'react';
import styles from './Contact.module.css';
import contactImg from '../images/contact.png';
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_trljat8', e.target, 'CCNFkGgFPntNCurBp')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

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

  const Submit = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("txta").value = "";
  }
  return (
    <section className={styles.contact} id="contact">
      <h1 className='heading'>contact us</h1>

      <div className={styles.row}>
        <div className={styles.image}>
          <img src={contactImg} alt />
        </div>
        <form id='form_id' onSubmit={sendEmail}>
          <h3>send us a message</h3>
          <input
            type="text"
            placeholder="name"
            className={styles.box}
            name="name"
            id='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="email"
            className={styles.box}
            name="email"
            id='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="phone number"
            className={styles.box}
            name="phone"
            id='phone'
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="message"
            className={styles.box}
            cols="30"
            rows="10"
            name="message"
            id='txta'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className='btn' onClick={Submit}>
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
