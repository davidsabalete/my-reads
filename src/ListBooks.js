import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props

    let booksReading = books.filter(book => book.shelf === 'reading')
    let booksWanted = books.filter(book => book.shelf === 'wanted')
    let booksRead = books.filter(book => book.shelf === 'read')

    return (
      <div className="list-books">
      
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" 
              books={ booksReading }
              onUpdateBook={ this.props.onUpdateBook }
              />
            <Bookshelf title="Want to read" 
              books={ booksWanted }
              onUpdateBook={ this.props.onUpdateBook }
              />
            <Bookshelf title="Read" 
              books={ booksRead }
              onUpdateBook={ this.props.onUpdateBook }
              />
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
