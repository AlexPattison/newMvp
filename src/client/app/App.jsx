import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [this.props.books]
    }
  }


  // handleResponse(response) {
  // for (var i = 0; i < response.items.length; i++) {
  //   var item = response.items[i];
  //   // in production code, item.text should have the HTML entities escaped.
  //   document.getElementById("content").innerHTML += "<br>" + "<img src=" + item.volumeInfo.imageLinks.thumbnail + ">";
  // }

  // function handleQuery(bookTitle) {
  //   var titleArray = bookTitle.split(' ');
  //   return titleArray.join('+');
  // };
  // <script src="https://www.googleapis.com/books/v1/volumes?q=`${handleQuery('Sometimes a Great Notion')}`&callback=handleResponse"></script>

  addBook(author, rating, title) {
    this.state.books.push({
      author: author, rating: rating, title: title
    })
  }

  render() {
    return (


      <div>
      {console.log('STATE: ', this.state)}
        <h1>BookClub</h1>
          State: <p>{this.state.text}</p>
        <form>
        {/* What action do I need here? Where should this go? */}
        {/* Every input needs a name. submit button will handle post request */}

          Title: <input type="text" name="Title" />
          Author: <input type="text" name="Author" />
          Rating: <input type="integer" name="rating" />
          <br/>
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
    <td><img src={props.book.items[0].volumeInfo.imageLinks.thumbnail}/></td>
    <td style={{paddingRight: 10}}>{props.book.items[0].volumeInfo.title}</td>
    <td>{props.book.items[0].volumeInfo.authors[0]}</td>
  </tr>
)

export default App;
