import React , {useState} from 'react';
import MovieCard from './MovieCard';


export default function SearchComponent(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const api_key = process.env.REACT_APP_API_KEY;
        console.log('hehe');

        const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const rawData = await fetch(api_url);
            const data = await rawData.json();
            setMovies(data.results);
            
            
        }
        catch(err){
            console.error(err);
        }

    }

    return(
        <>
            <form className = 'form' onSubmit = {searchMovies}>
            <label htmlFor='query' className = 'label'>Search Movies</label>
            <input required
                className = 'input' 
                name = 'query' 
                type = 'text' 
                placeholder = 'i.e Epic Movie' 
                value = {query} 
                onChange ={(e) => setQuery(e.target.value)}/>
            <button type = 'submit' className = 'button'>Search</button>
            </form>

            <div className = 'card-list'>
                {movies.filter(movie => movie.poster_path).map(
                    movie => (<MovieCard movie = {movie} />)
                )}
            </div>
        </>
    )
}