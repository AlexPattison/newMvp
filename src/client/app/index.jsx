import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import BOOKS from '../../../data/books.js'

// import './index.css';

ReactDOM.render(
  <App books={BOOKS}/>,
  document.getElementById('app')
);
