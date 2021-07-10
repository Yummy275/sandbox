import React from 'react';
import styled from 'styled-components';
import LevelPath from './LevelPath';

const Container = styled.div`
    width: 100%;
`;

const Title = styled.h1`
    text-align: center;
`;

const Era = ({ name }) => {
    return (
        <Container>
            <Title>{name}</Title>
            <LevelPath />
        </Container>
    );
};

export default Era;
