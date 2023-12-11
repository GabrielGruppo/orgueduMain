import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
 
  const [error, setError] = useState(''); // Define 'error'
  const [msg, setMsg] = useState(''); // Define 'msg'


  useEffect(() => {
   
    if (localStorage.getItem('login') === 'true') {

      setEmail(localStorage.getItem("email"));
      setName(localStorage.getItem("name"));
    }
  }, []);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
   

    if(localStorage.getItem('login') === 'true'){
      let acao = 'update';
      let id = localStorage.getItem('user_id');
      localStorage.setItem('name',name);
      localStorage.setItem('email',email);
    } else { let acao = 'insert';}
    
    let acao = localStorage.getItem('login') === 'true' ? 'update' : 'insert';
    let id = localStorage.getItem('login') === 'true' ? localStorage.getItem('user_id') : null;

    const data = {acao:acao, email:email, password:password, name:name, id:id };


    fetch('http://localhost:84/orguedumain/user_repositorio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    //.catch((error) => {
    //  alert(error.message)});

    
    //window.location.reload();
    localStorage.getItem('login') === 'true' ? toast.success('Usuario atualizado') : toast.success('Você foi cadastrado com sucesso'); 
    
  

  };

  return (
   <div className={styles.paiforms}>
    <form className={styles.registerForm} onSubmit={handleRegisterSubmit}>
      <h3>Register form</h3>

    

      <input type="text" required placeholder="Enter your name" id='name' className={styles.box} value={name.slice(0,15)} onChange={(e) => setName(e.target.value)} />
      <input type="email" required placeholder="Enter your email" id='email' className={styles.box} value={email} onChange={(e) => setEmail(e.target.value)} />
      {localStorage.getItem('login') !== 'true' ? 
      <input type="password" required placeholder="Enter your password" id='password' className={styles.box} value={password} onChange={(e) => setPassword(e.target.value)} />
      : null}
      
      <button type="submit" className="btn">
        <span className="text text1">Register</span>
        <span className="text text2" aria-hidden="true">Register</span>
      </button>
      <ToastContainer />
    </form>
    </div>
   
  );
};

export default Register;
