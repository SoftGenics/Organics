import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components';

export const Button= styled('LinkR')`
    position: relative;
    border: 0.081rem solid var(--Black);
    border-radius: 1.25rem;
    /* font-family: 'Fjalla One', sans-serif;  */
    /* font-family: 'Indie Flower', cursive; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Chela One', cursive; */
    /* font-family: 'Jua', sans-serif; */
    font-size: 1.2rem;
    font-weight: 900;
    padding: 1.063rem 0.75rem;
    height: 2rem;
    max-width: 6.875rem;
    line-height: 3.75rem;
    min-width: 1.25rem;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: var(--Black);
    background: var(--White);
    white-space: nowrap;
    cursor: pointer;
    display: flex;

    &:hover{
        transition: all .1s ease-in;
    }

    @media screen and (max-width: 54rem){
        font-size: 1rem;
        padding: 0.813rem 0.438rem;
    }
    @media screen and (max-width: 42rem){
        display: none;
    }
`;
// Mobile button
export const MobileButton= styled('LinkR')`
    position: absolute;
    border: 0.081rem solid var(--Black);
    border-radius: 1.25rem;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.938rem 0.688rem;
    height: 2rem;
    max-width: 6.875rem;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: var(--Black);
    background: var(--White);
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    top: -32%;

    @media screen and (min-width: 44rem){
        display: none;
    }
`;