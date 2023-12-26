import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css';

import Nav from './components/Nav';
import Intro from './components/Intro';
import Produtos from './components/Produtos';
import Linha from './components/Linha';
import CaroselImg from './components/CaroselImg';
import Footer from './components/Footer';
import Teste from './components/Teste';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <Intro />
    <Teste />
    <Produtos />
    <Linha />
    <CaroselImg />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
