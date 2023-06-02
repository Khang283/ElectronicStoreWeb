import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import { Outlet } from 'react-router-dom';
// import Home from './components/Home/Home';
import Details from './components/Details/Details';

function App() {
  return (
    <div>
      <Header/>
      <Details/>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default App;
