import React, { Component } from 'react';
import './App.css';

class App extends Component {
  addBook(author, rating, title) {
    this.props.books.push({
      author: author, rating: rating, title: title
    })
  }

  render() {
    return (

      <div>
        <h1>BookClub</h1>
        {this.addBook("yep", "35", "hello")}
        <form>
        {/* What action do I need here? Where should this go? */}
        {/* Every input needs a name. submit button will handle post request */}
          Title: <input type="text" name="Title" />
          Author: <input type="text" name="Author" />
          Rating: <input type="integer" name="rating" />
          <br/>
          <button onclick="this.addBook('hello', 'hey', 'yep')">Submit</button>
        </form>
        <Booklist books={this.props.books} />
      </div>
    );
  }


}

// addBook("test", "10", "test")

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
