import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import Path from './FEL/Routes';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Path/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
