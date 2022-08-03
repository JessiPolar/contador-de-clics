import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <h1 className='contador-clics'>Contador de Clics</h1>
    <App />
  </React.StrictMode>
);

