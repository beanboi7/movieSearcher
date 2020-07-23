import React from 'react';



function MovieCard({movie}){
    return(
        <div className = 'card' key= {movie.id}>
            <img 
                src = {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt = {movie.title + 'poster'}
                className = 'card--image' />
            <div className = 'card--content'>
                <h3 className = 'card--title'>{movie.title}</h3>
                <p><small>Release Date: {movie.release_date}</small></p>
                <p><small>Movie rating: {movie.vote_average}</small></p>
                <p className = 'card--desc'>Description: {movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard;