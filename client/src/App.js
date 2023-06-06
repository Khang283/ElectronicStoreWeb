import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
