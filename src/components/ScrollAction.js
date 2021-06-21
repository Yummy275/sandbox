import React from 'react';
import styled, { keyframes } from 'styled-components';
import greenPlanetImg from '../assets/green-planet.png';

const FadeIn = keyframes`
    from {
        opacity: 0;
        transform: translate(20px, 20px);
    }

    to {
        opacity: 1;
        transform: translate(0);
    }
`;

const GreenPlanet = styled.img`
    opacity: 0;
    animation: ${FadeIn} 0.3s ease forwards;
`;

const ScrollAction = ({ appear }) => {
    return (
        <>{appear ? <GreenPlanet src={greenPlanetImg}></GreenPlanet> : ''}</>
    );
};

export default ScrollAction;
