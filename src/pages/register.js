import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './register.module.css';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
 
  const [error, setError] = useState(''); // Define 'error'
  const [msg, setMsg] = useState(''); // Define 'msg'


  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    alert('Você foi cadastrado com sucesso')


    const data = {acao:'insert', email:email, password:password, name:name };

    fetch('http://localhost:84/orguedumain/user_repositorio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  

  };

  return (
   <div className={styles.paiforms}>
    <form className={styles.registerForm} onSubmit={handleRegisterSubmit}>
      <h3>Register form</h3>

    

      <input type="text" required placeholder="Enter your name" id='name' className={styles.box} value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" required placeholder="Enter your email" id='email' className={styles.box} value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" required placeholder="Enter your password" id='password' className={styles.box} value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button type="submit" className="btn">
        <span className="text text1">Register</span>
        <span className="text text2" aria-hidden="true">Register</span>
      </button>
    
    </form>
    </div>
   
  );
};

export default Register;
