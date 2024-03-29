import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import { Outlet } from 'react-router-dom';
import Breadcumb from './components/Breadcumb/Breadcump.js';
import SupportEngine from './components/SupportChat';
import Favorite from './components/Favorite/Favorite';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Breadcumb /> */}
      {/* <Favorite/> */}
      <Outlet />
      {/* <SupportEngine /> */}
      <Footer />
    </div>
  );
}

export default App;
