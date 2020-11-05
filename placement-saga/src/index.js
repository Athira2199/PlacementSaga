import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css';
import { Navbar, NavItem} from 'react-materialize';
ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
