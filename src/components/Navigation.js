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
            <nav className="Navigation">
                <ul className='Navigation__list'>
                    {
                        this.props.movies.map(movie => 
                            <li key={movie.imdbID}>
                                <button 
                                    id={`${movie.imdbID}_button`}
                                    onClick={this.changeMovie}
                                    className={
                                        movie.imdbID === this.props.activeMovie ? 
                                        "Navigation__button Navigation__button--active"
                                        :
                                        'Navigation__button'
                                    }
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
    movies: PropTypes.array.isRequired,
    movieToSelect: PropTypes.func.isRequired
};

export default Navigation;
