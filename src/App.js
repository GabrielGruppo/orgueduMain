import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Subjects from './components/Subjects';
import About from './components/About';
import Teacher from './components/Teacher';
import Contact from './components/Contact';
import Footer from './components/footer';
import Canvas from './pages/notas';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Home />
        <Subjects />
        <Routes>
          <Route path='/notas' element={<Canvas />} />
        </Routes>
        <Teacher />
        <About />
        <Contact />
        <Footer />
        
      </div>

      
    </BrowserRouter>
  );
}

export default App;
