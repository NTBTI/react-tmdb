import { useState, useEffect } from 'react';

//API
import API from '../API';

//this is the same as we return from the API
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};
    
export const useHomeFetch = () => {
    //first value is the state itself, second is the setter to set the state
    const [state, setState] = useState(initialState); //we use the initialState to make sure a default
    /*
    //alternatively you could do it like this:
    const state = useState();
    //then to get the current state you would lok in the array
    curState = state[0];
    stateSetter = state[1];
    //but don't
    */

    /* important! Becuase we have 3 states here, we will get 3 re-renders if we touch any ONE of them */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /* Create a new state to use for search */
    const [searchTerm, setSearchTerm] = useState(''); //so the initial state of this is empty string

    console.log(searchTerm); //you can see after a slight delay the trigger here

    //in the API code it uses await so we must mark this async
    const fetchMovies = async(page, seaerchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(seaerchTerm, page);
            console.log(movies);

            //if you give this a function, it will call it with the previous state
            //also never never never set the state manually, always call a setState
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results] //this appends more movies if the "prev" has some already else set the movies
            }))
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    //Inital render and search
    useEffect(() => {
        setState(initialState); //this wipes out the current state so this will make the search return the new values
        fetchMovies(1, searchTerm);
    }, [searchTerm]); //this is a dependency array. empty means this will only fire once (when the page renders).
    //having something in here means it will fire on every change of that dependencey

    return {
        state: state,
        loading: loading,
        error: error,
        setSearchTerm,
        searchTerm,
    }
}