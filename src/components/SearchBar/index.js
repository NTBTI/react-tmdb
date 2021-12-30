import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    /* Effects fire on every refresh. What we actualy want is only on user input
        so we can use a ref to keep track of this
    */
    const initial = useRef(true);


    /* This makes the search bar wait before searching.
    */
    useEffect(() => {
        //then use the ref
        if (initial.current) {
            //a ref does NOT trigger a re-render, so it is safe to set this directly
            //a state DOES trigger a re-render, which is why you must use a setter for a State
            //but can directly access a ref
            //this is an easy way to make a control function to skip renderings
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

    // We need to clear this timer on every re-render
    return () => clearTimeout(timer) //this will only trigger when a render is completed so attach to the return
    },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search Movies" 
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}    
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;