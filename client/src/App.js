import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import { Outlet } from 'react-router-dom';
import MyAccount from './components/MyAccount/MyAccount';
import MyActivities from './components/MyActivities/MyActivities';
import Account from './components/Account/Account';
import Home from './components/Home/Home';
import Breadcumb from './components/Breadcumb/Breadcump.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <Breadcumb />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
