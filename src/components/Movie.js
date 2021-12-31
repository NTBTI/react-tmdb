import React from 'react';
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid';
import Spinner from './Spinner';
import Breadcrumb from './Breadcrumb';
import MovieInfo from './MovieInfo';

//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';


const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loadingState: loading, error } = useMovieFetch(movieId);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <div>Something Went Wrong</div>
    }

    return (
        <>
            <Breadcrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
        </>
    )
};

export default Movie;