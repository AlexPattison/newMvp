import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import books from 'books'

console.log(books);



ReactDOM.render(
  <App books={books}/>,
  document.getElementById('app')
);
