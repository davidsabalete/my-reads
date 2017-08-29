import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { title, books, changeShelf } = this.props
        
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>
                    { title }
                </h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {books.map((book) =>(
                            <li key={ book.id } >
                                <Book 
                                    book={ book }
                                    books={ books }
                                    changeShelf={ changeShelf }
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Bookshelf
