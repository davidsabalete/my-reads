import React from 'react'
import PropTypes from 'prop-types'

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.title }</h2>
        </div>
    )
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired

}

export default Bookshelf
