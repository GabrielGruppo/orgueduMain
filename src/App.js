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
import Canvas from './pages/canvas';
import Notas from './pages/notas';
import Calendar from './pages/calendar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Home />
        <Subjects />
        <Teacher />
        <About />
        <Contact />
        <Footer />
        
        <Routes>
          <Route path='/canvas' element={<Canvas />} />
          <Route path='/notas' element={<Notas />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>

      </div>

      
    </BrowserRouter>
  );
}

export default App;
