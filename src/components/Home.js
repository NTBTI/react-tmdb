//why no folder? Becuase we make homepage a container, we style every piece inside it instead
//thus there is no need for a style file here

import React, { useState, useEffect } from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components

//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error } = useHomeFetch()
    console.log(state); //you will see several renders in console. one with page == 0 (the initial state) then one for each state once data is returned
    return <div>Home Page</div>
}

export default Home;