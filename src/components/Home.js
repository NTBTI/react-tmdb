//why no folder? Becuase we make homepage a container, we style every piece inside it instead
//thus there is no need for a style file here

import React, { useState } from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components

//Hooks

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    //first value is the state itself, second is the setter to set the state
    const [state, setState] = useState();
    /*
    //alternatively you could do it like this:
    const state = useState();
    //then to get the current state you would lok in the array
    curState = state[0];
    stateSetter = state[1];
    //but don't
    */

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return <div>Home Page</div>
}

export default Home;