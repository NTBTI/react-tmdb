import React from "react";
import { Link } from "react-router-dom";

import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>{/* backticks are a string literal */  }
                <Image src={image} alt="Movie Thumb" />
            </Link>
        ) : (
            <Image src={image} alt="Movie Thumb" />
        )}
    </div>
);

export default Thumb;