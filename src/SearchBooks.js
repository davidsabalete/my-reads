import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    
    state = {
        newBooks: [],
        query: ''
    }
    
    getBooks = (event) => {
        const query = event.target.value.trim()
        this.setState({ query })
        
        // if user input => run the search
        if (query) {
            BooksAPI.search(query, 20).then((books) => {
                books.length > 0 ? this.setState({ newBooks: books }) : this.setState({ newBooks: [] })
            })
        } else {
            this.setState({ newBooks: [] })
        }
    }
    
    
    render() {
        
        const { query, newBooks } = this.state
        const { books, changeShelf } = this.props
        
        return (
            <div className='search-books'>
            
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        <input 
                            type='text' 
                            value={ query }
                            onChange={ this.getBooks }
                            placeholder='Search by title or author'
                        />
                    </div>
                </div>
                
                <div className='search-books-results' >
                    <ol className='books-grid'>
                    { newBooks.map((book) => (
                        <li key={book.id}>
                            <Book 
                                book={ book } 
                                books={ books }
                                changeShelf={ changeShelf }
                            />
                        </li>
                    )) }
                    </ol>
                </div>
                
            </div>
        )
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SearchBooks