import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectBookshelf from './SelectBookshelf'

class Book extends Component {
    
    render() {
        const { book, books, changeShelf } = this.props
        
        return (
            <div className='book'>
            
                <div className='book-top'>
                    <div className='book-cover' 
                        style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>
                    
                    <SelectBookshelf 
                        book={ book }
                        books={ books }
                        changeShelf={ changeShelf }
                    />
                </div>
                
                <div className='book-title'>
                    { book.title }
                </div>
                
                {book.authors && book.authors.map((author, index) => (
                <div key={index} className='book-authors'>
                    {author}
                </div>
                ))}
                
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book
