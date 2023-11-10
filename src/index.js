import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

