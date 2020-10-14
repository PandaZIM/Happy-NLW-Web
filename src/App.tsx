import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.scss';
import './pages/landing.scss'

import logoImg from './assets/images/Logo.svg'
import { Route } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
     <Routes/>
  );
}

export default App;
