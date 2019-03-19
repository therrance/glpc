import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Navigation extends Component {

    changeMovie = (e) => {
        const buttonId = e.target.id;
        const movieId = buttonId.split('_')[0];
        this.props.movieToSelect(movieId);
    }

    render() {
        return (
            <nav>
                <ul>
                    {
                        this.props.movies.map(movie => 
                            <li key={movie.imdbID}>
                                <button 
                                    id={`${movie.imdbID}_button`}
                                    onClick={this.changeMovie}
                                >
                                    {movie.Title}
                                </button>
                            </li>
                        )
                    }
                </ul>
            </nav>
        );
    }
}

Navigation.propTypes = {
    movies: PropTypes.array.isRequired
};

export default Navigation;
