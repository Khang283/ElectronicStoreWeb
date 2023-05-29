import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Login from './components/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Home/>
{/* <Login/> */}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default App;
