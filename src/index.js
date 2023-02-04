import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }
  body{
    width: 100%;
    height: 100vh;
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Space Mono', monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global></Global>
    <App />
  </>
);