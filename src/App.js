import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <tr>
        <td>{movie.Title}</td>
        <td>{movie.Year}</td>
        <td>{movie.Rated}</td>
    </tr>
    );
  }
}

class MoviesTable extends Component {

  render() {
    const rows = this.props.movies.map(item => (
      <MovieRow movie={item} />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rated</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MoviesTable movies={ MOVIES } />
    );
  }
}

const MOVIES = [{ "Title": "Guardians of the Galaxy Vol. 2", "Year": "2017", "Rated": "PG-13", "Released": "05 May 2017", "Runtime": "136 min", "Genre": "Action, Adventure, Comedy, Sci-Fi", "Director": "James Gunn", "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)", "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.7/10" }, { "Source": "Rotten Tomatoes", "Value": "84%" }, { "Source": "Metacritic", "Value": "67/100" }], "Metascore": "67", "imdbRating": "7.7", "imdbVotes": "449,175", "imdbID": "tt3896198", "Type": "movie", "DVD": "22 Aug 2017", "BoxOffice": "$389,804,217", "Production": "Walt Disney Pictures", "Website": "https://marvel.com/guardians", "Response": "True" }];

export default App;
