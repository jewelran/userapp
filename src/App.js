import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import data from './data/data.json';
import Course from './components/Course.js'
function App() {
  const [course, setcourse] = useState([]);
  useEffect( () => {
    setcourse(data)
  },[])
  // console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <Course course ={course}></Course>
      </header>
    </div>
  );
}

export default App;
