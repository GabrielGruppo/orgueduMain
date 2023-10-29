import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [id_user, setId] = useState('');


 const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    setLoginFormOpen(false);
  };

  const handleLoginClick = () => {
    setLoginFormOpen(!isLoginFormOpen);
    {/* setMenuOpen(false);*/}
  };

  //formulario submissao --------------------------------------------------------------------------------------------------------

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");


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
      if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
        setError(response[0].result);
        alert(error);
    }
    else{
        setMsg(response[0].result);
        setTimeout(function(){
            localStorage.setItem("login", true);
            localStorage.setItem("name", response[0].name);
            localStorage.setItem("id_user", response[0].id)
            var name = localStorage.getItem('name');
            var id_user = localStorage.getItem('id_user');
            setId(id_user);
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
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <i className={`fa-solid fa-otter fa-lg ${styles.logoIcon}`}></i> concentraMind
      </a>

      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
        <a href="#home" className={styles.hoverUnderline}>
          Home
        </a>
        <a href="#ferramentas" className={styles.hoverUnderline}>
          Ferramentas
        </a>
        <a href="#teacher" className={styles.hoverUnderline}>
          Razão
        </a>
        <a href="#about" className={styles.hoverUnderline}>
          Sobre
        </a>
        <a href="#contact" className={styles.hoverUnderline}>
          Contato
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
            <input type="checkbox" name="" id="remember" className={styles.remembercheck}/>
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={styles.signup}>
              <label>Don't have an account?</label>
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
