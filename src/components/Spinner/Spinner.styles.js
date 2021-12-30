import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    /* This is a different way to do the animation than we did in Thumbnail */
    @keyframes spin {
        0% {
            transform: rotate(0deg);
            background: var(--white);
        }
        100% {
            transform: rotate(360deg);
            background: var(--medGrey);
        }
    }
`;