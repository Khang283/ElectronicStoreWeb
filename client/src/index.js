import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SupportAdmin from './components/SupportChatAdmin';

const path = window.location.pathname
ReactDOM.render(
  <React.StrictMode>
    {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin />}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();