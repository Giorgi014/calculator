import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Calculator />
  </React.StrictMode>
);
