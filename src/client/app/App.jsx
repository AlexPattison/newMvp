import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <h1>BookClub</h1>
        <form>
          Title: <input type="text" title="Title" />
          Author: <input type="text" author="Author" />
          Rating: <input type="integer" value="" />

        </form>
        <Booklist books={this.props.books} />
      </div>
    );
  }
}

const Booklist = (props) => (
  <table>
    <tbody>
      {props.books.map(function(book) {
        return <BookListEntry book={book} />})}
    </tbody>
  </table>
)

const BookListEntry = (props) => (
  <tr>
    <td>{props.book.author}</td>
    <td>{props.book.title}</td>
    <td>{props.book.rating}</td>
  </tr>
)

export default App;
