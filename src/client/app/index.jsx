import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import './index.css';

var BOOKS = [
  {author: 'David Foster Wallace', title: 'Infinite Jest', rating: 5},
  {author: 'Kurt Vonnegut', title: 'Mother Night', rating: 5},
  {author: 'Cormac McCarthy', title: 'The Road', rating: 4},
  {author: 'Cormac McCarthy', title: 'No Country for Old Men', rating: 4},
  {author: 'Cormac McCarthy', title: 'All the Pretty Horses', rating: 5},
  {author: 'Stephenie Meyer', title: 'Twilight', rating: 2},
]
ReactDOM.render(
  <App books={BOOKS}/>,
  document.getElementById('app')
);
