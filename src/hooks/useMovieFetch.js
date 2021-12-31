import { useState, useEffect } from 'react';

//API
import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loadingState, setLoadingState] = useState(true);
    const [error, setError] = useState(false);

    /* 
     * You can also put the function of fetchMovie outside the useEffect BUT!
     * You MUST import and wrap it in a useCallbackHook with its own depndency array and then add it as a dependency
     *  Otherwise it will create an infinite loop becuase it will be called on every render...
     * which happens on every movie being loaded...which is not good
     * const fetchMovie = useCallbackHook(async () => {},[]);
     * The reason you would do this is if you need to use the same function called from somewhere else
    */
    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoadingState(true);
                setError(false);

                //get the movie data from one source
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                //we only want the director from credits
                const directors = credits.crew.filter(
                    member => member.job === 'Director' //this is from the TMDB API to get a director. Its the member.job entry
                )

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors //in ES6 you can just set the key if its exactly the same
                });

                setLoadingState(false);
            } catch (error) {
                setError(true);
            }
        }
        fetchMovie();
    }, [movieId]);

    return { state, loadingState, error };
}