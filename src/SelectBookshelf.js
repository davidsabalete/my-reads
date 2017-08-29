import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectBookshelf extends Component {
    render() {
        const { book, books, changeShelf } = this.props
        
        let currentShelf = 'none'
        
        for (let b of books) {
            if (b.id === book.id) {
                currentShelf = b.shelf
                break
            }
        }
        
        return (
            <div className='book-shelf-changer'>
                <select
                    defaultValue={ currentShelf }
                    onChange={ (event) => changeShelf(book, event.target.value) }>
                        <option value='none' disabled>Move to...</option>
                        <option value='currentlyReading'>Currently Reading</option>
                        <option value='wantToRead'>Want to Read</option>
                        <option value='read'>Read</option>
                        <option value='none'>None</option>
                </select>
            </div>    
        )
    }
    
}

SelectBookshelf.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SelectBookshelf