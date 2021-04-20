import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './components/app-head/head'
import Plus from './components/btn/plus';
import Conten from './components/conten/conten';

ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <Plus/>
    <Conten/>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
