import React from 'react'
import MovieList from '../MovieList/MovieList'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css'
import MovieRating from '../Rating/Rating';

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card' style={{marginRight:'20px'}}>
        <Card style={{width:'18rem',margin:"30px auto"}}>
      <Card.Img className="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className='desc'>
          {movie.description}
        </Card.Text>
        <MovieRating movieRating={movie.rate} isMovieRating={true}/> {/* il suffit d5alt lil page hethi ma3neha raho film*/} 
      </Card.Body>
    </Card>
    </div> 
  )
}

export default MovieCard
