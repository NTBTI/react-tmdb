//why no folder? Becuase we make homepage a container, we style every piece inside it instead
//thus there is no need for a style file here

import React, { useState, useEffect } from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import HeroImage from './HeroImage';

//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error } = useHomeFetch()
    console.log(state); //you will see several renders in console. one with page == 0 (the initial state) then one for each state once data is returned
    
    //the weird "Tags" are becuase you can only return one JSX level element
    //so we need to wrap it. It could be in <div> or <p> or whatever, but this makes a null element wrapper
    return (
        <>
        {state.results[0] ? (
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
        ) : null}
        </>
    );
}

export default Home;