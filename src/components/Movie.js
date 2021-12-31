import React from 'react';
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid';
import Spinner from './Spinner';

//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loadingState: loading, error } = useMovieFetch(movieId);
    return (
        <>
            <div>Movie</div>
        </>
    )
};

export default Movie;