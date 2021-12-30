import React from 'react';

//import the logo images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//and the components we created
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    //note these are the names of things we exported from the Header styles file
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="RMDB Logo"/>
            <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
        </Content>
    </Wrapper>
);

// this is not a named export, this is the default so it can be imported without needing a name
export default Header;