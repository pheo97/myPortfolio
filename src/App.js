import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage';
import Home from './components/Home';

function App() {

  
  return (   
    <div >  
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={ < Home/>}/>
           <Route path="/projects" element={ <Projects/>}/>
           <Route path="/about" element={ <About/>}/>
           <Route path="/contact" element={ <Contact/>}/>
           <Route path="*" element={<ErrorPage/>}/>
         </Routes>
       </Router>
   </div>
  );
}

export default App;
