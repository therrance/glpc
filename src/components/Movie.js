import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    render() {
        const ratings = this.props.ratings.map((rating, i) => <li key={i}>{rating.Source}: {rating.Value}</li>);
        const actors = this.props.actors.split(', ').map((actor, i) => <li key={i}>{actor}</li>);

        return (
            <div className="Movie">
                <h2 className="Movie__title">{this.props.title}</h2>
                <h3 className="Movie__sub-title">Year: <em>{this.props.year}</em></h3>
                
                <h3 className="Movie__sub-title">Actors</h3>
                <ol className="Movie__actors">
                    {actors}
                </ol>
                
                <h3 className="Movie__sub-title">Ratings</h3>
                <ul className="Movie__ratings">
                    {ratings}
                </ul>
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
