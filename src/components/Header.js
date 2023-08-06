import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    setLoginFormOpen(false);
  };

  const handleLoginClick = () => {
    setLoginFormOpen(!isLoginFormOpen);
    setMenuOpen(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const data = { email, password };

    fetch('http://localhost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
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
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <i className={`fa-solid fa-otter fa-lg ${styles.logoIcon}`}></i> concentraMind
      </a>

      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
        <a href="#home" className={styles.hoverUnderline}>
          home
        </a>
        <a href="#ferramentas" className={styles.hoverUnderline}>
          ferramentas
        </a>
        <a href="#about" className={styles.hoverUnderline}>
          sobre
        </a>
        <a href="#teacher" className={styles.hoverUnderline}>
          equipe
        </a>
        <a href="#review" className={styles.hoverUnderline}>
          críticas
        </a>
        <a href="#contact" className={styles.hoverUnderline}>
          contato
        </a>
      </nav>

      <div className={styles.icons}>
        <div
          id="loginBtn"
          className={`fas fa-user`}
          onClick={handleLoginClick}
        ></div>
        <div id="menuBtn" className={`fas fa-bars ${isMenuOpen ? styles.active : ''}`} onClick={handleMenuClick}></div>
      </div>

      
        <form id='loginForm' className={`${styles.loginForm} ${isLoginFormOpen ? styles.active : ''}`} onSubmit={handleLoginSubmit}>
          <h3>login form</h3>
          <input type="email" placeholder="enter your email" id="email" className={styles.box} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="enter your password" id="password" className={styles.box} value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.remember}>
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">remember me</label>
          </div>
          <button type="submit" className="btn" id="login-btn">
            <span className="text text1">login now</span>
            <span className="text text2" aria-hidden="true">login now</span>
          </button>
        </form>
      
    </header>
  );
};

export default Header;
