import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    filter: drop-shadow(0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.8));

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0
        } 
        to {
            opacity: 1
        }
    }
`;