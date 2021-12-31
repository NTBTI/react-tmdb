import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    filter: drop-shadow(0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.8));

    h3 {
        margin: 10px 0 0 0 ;
    }

    p {
        margin: 5px 0;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
`;