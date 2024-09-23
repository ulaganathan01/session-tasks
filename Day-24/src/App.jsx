import { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import DataScience from './pages/DataScience';
import FullStack from './pages/FullStack';
import DigitalMarketing from './pages/DigitalMarketing';
import ArtificialIntelligence from './pages/ArtificialIntelligence';


function App() {
  return(
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick={(e) => console.log(e.target)} to="/">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/data-science">Data Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/full-stack-development">Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/artificial-intelligence-machine-learning">Artificial Intelligence and Machine Learning</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/digital-marketing">Digital Marketing</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<AllCourses/>}/>
        <Route path='data-science' element={<DataScience/>}/>
        <Route path='full-stack-development' element={<FullStack/>}/>
        <Route path='artificial-intelligence-machine-learning' element={<ArtificialIntelligence/>}/>
        <Route path='digital-marketing' element={<DigitalMarketing/>}/>
      </Routes>
    </div>
  )
}
export default App
