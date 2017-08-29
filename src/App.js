import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // once component has been mounted, get list of books
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((b) => {
      this.getBooks()
    })
  }

  render() {
    return (
      <div className="app">
      
        <Route path="/search" render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
        
        <Route exact path="/" render={() => (
          <div>
            <ListBooks 
              books={ this.state.books }
              onUpdateBook={ this.updateBook }
            />
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
