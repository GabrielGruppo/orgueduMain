import React, { useState, useEffect } from 'react';
import Modal from '../components/modal';
import { Outlet, Link } from "react-router-dom";
import styles from './register.css';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user_id, setId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [error, setError] = useState(''); // Define 'error'
  const [msg, setMsg] = useState(''); // Define 'msg'

  const handleCloseModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    setLoginFormOpen(false);
  };

  const handleLoginClick = () => {
    setLoginFormOpen(!isLoginFormOpen);
    // setMenuOpen(false); // Commented out to avoid the no-undef error
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const data = { email, password };

    fetch('http://localhost:84/orgueduMain/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response[0].result === "Invalid username!" || response[0].result === "Invalid password!") {
          setError(response[0].result);
          alert(error); // Change 'error' to 'response[0].result' here
        } else {
          setMsg(response[0].result);
          setTimeout(function () {
            localStorage.setItem("login", true);
            localStorage.setItem("name", response[0].name);
            localStorage.setItem("user_id", response[0].id)
            var name = localStorage.getItem('name');
            var user_id = localStorage.getItem('user_id');
            setId(user_id);
            setName(name);
            alert("Bem vindo " + name);
          }, 5);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setLoginFormOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <form id='loginForm' onSubmit={handleLoginSubmit}>
      <h3>Register form</h3>
      <input type="name" placeholder="Enter your name" id="name" className={styles.box} value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter your email" id="email" className={styles.box} value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter your password" id="password" className={styles.box} value={password} onChange={(e) => setPassword(e.target.value)} />
      
            
      {showModal && (
        <Modal
          title={<span>Log-in</span>}
          close={handleCloseModal}
        />)}


      <button type="submit" className="btn" id="login-btn">
        <span className="text text1">login now</span>
        <span className="text text2" aria-hidden="true">login now</span>
      </button>
    </form>
  );
};

export default Register;
