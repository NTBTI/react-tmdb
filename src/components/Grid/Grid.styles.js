import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--medGrey);

        @media screen and (max-width: 768px) {
            font-size: (--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    /* This sets a grid to be responsive in one line. Neat! */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;