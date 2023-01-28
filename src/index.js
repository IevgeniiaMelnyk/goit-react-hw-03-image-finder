import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { GlobalStyle } from './GlobalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
