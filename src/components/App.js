// TODO: style list
// TODO: styte form
// TODO: write prop-types
// TODO: make form edit edit independent
// TODO: cancel edit
// TODO: image for movie

import React, { Component } from "react";

import Movie from "./Movie";
import Navigation from "./Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
      selectedMovie: null
    };
  }

  selectNewMovie = (movieId) => {
    if (movieId) {
      this.setState({
        ...this.state,
        selectedMovie: movieId
      });
    }
  }

  componentDidMount() {
    const movieToShow = this.state.movies[0].id || null;
    this.setState({
      ...this.state,
      selectedMovie: movieToShow
    });
  }

  render() {
    let movieToSelect;

    if (this.state.selectedMovie) {
      const filteredMovies = this.state.movies.filter(movie => movie.imdbID === this.state.selectedMovie);
      if (filteredMovies.length > 0) {
        movieToSelect = filteredMovies[0];
      }
    }

    return (
      <div className="App">
        <Navigation 
          movies={this.state.movies} 
          movieToSelect={this.selectNewMovie
          }
        />
        <h1>Movies Database</h1>
        {
        movieToSelect ? 
          <Movie
            title={movieToSelect.Title}
            year={movieToSelect.Year}
            actors={movieToSelect.Actors}
            ratings={movieToSelect.Ratings}
            imdbID={movieToSelect.imdbID}
            key={movieToSelect.imdbID}
          />
          : null
        }
      </div>
    );
  }
}

const MOVIES = [{
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      {
        Source: "Rotten Tomatoes",
        Value: "84%"
      },
      { Source: "Metacritic", Value: "67/100" }
    ],
    Metascore: "67",
    imdbRating: "7.7",
    imdbVotes: "449,175",
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,804,217",
    Production: "Walt Disney Pictures",
    Website: "https://marvel.com/guardians",
    Response: "True"
  },
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Sci-Fi, Thriller",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 152 wins & 204 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.8/10" },
      {
        Source: "Rotten Tomatoes",
        Value: "86%"
      },
      { Source: "Metacritic", Value: "74/100" }
    ],
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,805,276",
    imdbID: "tt1375666",
    Type: "movie",
    DVD: "07 Dec 2010",
    BoxOffice: "$292,568,851",
    Production: "Warner Bros. Pictures",
    Website: "http://inceptionmovie.warnerbros.com/",
    Response: "True"
  },
  {
    Title: "It",
    Year: "2017",
    Rated: "R",
    Released: "08 Sep 2017",
    Runtime: "135 min",
    Genre: "Horror, Thriller",
    Director: "Andy Muschietti",
    Writer: "Chase Palmer (screenplay by), Cary Joji Fukunaga (screenplay by), Gary Dauberman (screenplay by), Stephen King (based on the novel by)",
    Actors: "Jaeden Lieberher, Jeremy Ray Taylor, Sophia Lillis, Finn Wolfhard",
    Plot: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    Language: "English",
    Country: "USA, Canada",
    Awards: "4 wins & 30 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      {
        Source: "Rotten Tomatoes",
        Value: "85%"
      },
      { Source: "Metacritic", Value: "69/100" }
    ],
    Metascore: "69",
    imdbRating: "7.4",
    imdbVotes: "341,196",
    imdbID: "tt1396484",
    Type: "movie",
    DVD: "09 Jan 2018",
    BoxOffice: "$326,898,358",
    Production: "Warner Bros. Pictures",
    Website: "http://www.Itthemovie.com",
    Response: "True"
  }
];

export default App;
