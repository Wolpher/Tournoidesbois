import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import Path from './FEL/Routes';
import { LoginProvider } from './Context';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <>
  
  <LoginProvider>
    <BrowserRouter>
      <Path/>
    </BrowserRouter>
  </LoginProvider>
  
  </>
);
