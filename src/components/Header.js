import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Modal from './modal';
import { Link } from "react-router-dom";
import Register from '../pages/register';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal5, setShowModal5] = useState(false);


  const handleCloseModal5 = () => {
    console.log("Closing modal");
    setShowModal5(false);
  };

 const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    setLoginFormOpen(false);
  };

  const handleLoginClick = () => {
    setLoginFormOpen(!isLoginFormOpen);
    {setMenuOpen(false);}
  };

  //formulario submissao --------------------------------------------------------------------------------------------------------




  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const data = { acao:'login',email:email, password:password};

    fetch('http://localhost:84/orgueduMain/user_repositorio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if(response.message != "Loggedin successfully!"){
        alert(response.message);
    }
    else{
            console.log(response.message);
            window.location.reload();
            localStorage.setItem("login", 'true');
            localStorage.setItem("name", response.name);
            localStorage.setItem("email", response.email);
            localStorage.setItem("user_id", response.id)
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

  function logoutSubmit(){
    localStorage.setItem("login", "");
    localStorage.clear();
    window.location.reload();
}


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
        {localStorage.getItem('login') !== 'true' ? <Link to="/pages/register" onClick={() => setShowModal5(true)}> Registre-se </Link> : <Link to="/pages/register" onClick={() => setShowModal5(true)}> Atualizar dados </Link>}
        
       
      </nav>
      {showModal5 && (
                    <Modal 
                    title={<span>Register</span>}
                    content={<Register />}
                    close={handleCloseModal5}
                    />)}
      <div className={styles.icons}>
        <div
          id="loginBtn"
          className={`fas fa-user`}
          onClick={handleLoginClick}
        >
         
        </div>
        <div className={styles.logged}>
          {localStorage.getItem('login') === 'true' ? 
        <h6>Olá,  {localStorage.getItem('name')} </h6> : null}
        </div>

       <div id="menuBtn" className={`fas fa-bars ${isMenuOpen ? styles.active : ''}`} onClick={handleMenuClick}></div>
      </div> 

      
        <div id='loginForm' className={`${styles.loginForm} ${isLoginFormOpen ? styles.active : ''}`}>
        
        {localStorage.getItem('login') == 'true' ? (

          <button type="submit" className="btn logout" id="login-btn" onClick={logoutSubmit}>
          <span className="text text1">Logout</span>
          <span className="text text2" aria-hidden="true">Logout</span>
        </button>
      ) : 

      // executar formulario de login
      (<form onSubmit={handleLoginSubmit}>
      <h3>login form</h3>
      <input type="email" placeholder="enter your email" id="email" className={styles.box} value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="enter your password" id="password" className={styles.box} value={password} onChange={(e) => setPassword(e.target.value)} />


      <button type="submit" className="btn" id="login-btn">
        <span className="text text1">login now</span>
        <span className="text text2" aria-hidden="true">login now</span>
      </button>
    </form>)}
        </div>

        
      
    </header>
  );
};

export default Header;
