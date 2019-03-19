import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    render() {
        const ratings = this.props.ratings.map((rating, i) => <li key={i}>{rating.Source}: {rating.Value}</li>);
        const actors = this.props.actors.split(', ').map((actor, i) => <li key={i}>{actor}</li>);

        return (
            <div className="Movie">
                <h2>{this.props.title}</h2>
                <h3>Year: <em>{this.props.year}</em></h3>
                
                <h3>Actors</h3>
                <ul>
                    {actors}
                </ul>
                
                <h3>Ratings</h3>
                <ol>
                    {ratings}
                </ol>
            </div>
        );
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    ratings: PropTypes.array.isRequired,
}

export default Movie;
