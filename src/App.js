import React from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    
    state = {
        books: []
    }
  
    componentDidMount() {
        // once component has been mounted, get list of books
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
  
    changeShelf = ( aBook, aShelf ) => {
        BooksAPI.update( aBook, aShelf ).then(() => {
            
            // update shelf prop from a book
            aBook.shelf = aShelf
            
            // get list of books without updated or new book
            let updatedBooks = this.state.books.filter( book => book.id !== aBook.id)
            
            // add book to arrya and set new state
            updatedBooks.push(aBook)
            
            this.setState({ books: updatedBooks })
        })
    }
  
    render() {
        const { books } = this.state
        
        return (
        <div className='app'>
        
          <Route path='/search' render={({ history }) => (
            <SearchBooks 
                books={ books }
                changeShelf={ this.changeShelf }
            />
          )}/>
          
          <Route exact path='/' render={() => (
            <div>
              <ListBooks 
                books={ books }
                changeShelf={ this.changeShelf }
              />
              <div className='open-search'>
                <Link to='/search'>Search</Link>
              </div>
            </div>
          )}/>
        
        </div>
        )
    }
}

export default BooksApp
