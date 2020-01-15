import React, { Component } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import './App.css';

class App extends Component {

  state = {
    movies : [], 
    selectedMovie : null
  }
 
  componentDidMount(){
    //FETCH DATA
    fetch('http://127.0.0.1:8000/api/movies',{
      method: 'GET', 
      headers:{
        'Authorization': 'Token a84b1d9d4f72c9463db5cfc441505cfcbc641200'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({movies: res}))
    .catch(error => console.log(error))
  }

  movieCliked = movie =>{
    this.setState({selectedMovie: movie})
  }
  render(){
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <div className = "layout">
            <MovieList movies = {this.state.movies} movieClicked = {this.movieClicked}/>
            <MovieDetails movie = {this.state.selectedMovie} />

        </div>
        
      </div>
    );
  }
}


export default App;
