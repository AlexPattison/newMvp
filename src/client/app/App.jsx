import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isbn: ''
    }
  }

  componentWillMount() {
    var context = this;
    axios.get('/api/')
      .then(function (response) {
        console.log(response);
        console.log(this);
        console.log('Response.data: ', response.date)
        context.setState({books: response.data});
        console.log(context.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event)
    var context = this;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.isbn}`)
      .then(function (response) {
        return response.json();
      })
      .then(function(book) {
        context.setState({books: [book].concat(context.state.books)});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({isbn: event.target.value})
  }

  render() {
    return (

      <div>
        <h1>BookClub</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          ISBN: <input type="string" name="isbn" onChange={this.onInputChange.bind(this)} value={this.state.isbn} />
          <input type="submit" name="Save" />
          <br/>

        </form>
        <Booklist books={this.state.books} />
      </div>
    );
  }
}

const Booklist = (props) => (
  <table>
  {console.log(props.books)}
    <tbody>
      {props.books.map(function(book) {
        return <BookListEntry book={book} />
      })}
    </tbody>
  </table>
)

const BookListEntry = (props) => (
  <tr>
    <td><img src={props.book.items[0].volumeInfo.imageLinks.thumbnail}/></td>
    <td style={{paddingRight: 10}}>{props.book.items[0].volumeInfo.title}</td>
    <td>{props.book.items[0].volumeInfo.authors[0]}</td>
    <td>{props.book.items[0].volumeInfo.description}</td>
  </tr>
)

export default App;
