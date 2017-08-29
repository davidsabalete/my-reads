import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
    
    state = {
        shelfChange: false
    }
    
    render() {
        const { books, changeShelf } = this.props

        let booksReading = books.filter(book => book.shelf === 'currentlyReading')
        let booksWanted = books.filter(book => book.shelf === 'wantToRead')
        let booksRead = books.filter(book => book.shelf === 'read')

        return (
            <div className='list-books'>
            
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                
                <div className='list-books-content'>
                    <div>
                        <Bookshelf title='Currently Reading' 
                            books={ booksReading }
                            changeShelf={ changeShelf }
                            />
                        <Bookshelf title='Want to read' 
                            books={ booksWanted }
                            changeShelf={ changeShelf }
                            />
                        <Bookshelf title='Read' 
                            books={ booksRead }
                            changeShelf={ changeShelf }
                            />
                    </div>
                </div>
                
            </div>
        )
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
    
export default ListBooks
