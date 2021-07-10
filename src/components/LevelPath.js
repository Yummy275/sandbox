import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30vh;
`;

const Space = styled.div`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background-color: #ffc266;
`;

const Connector = styled.div`
    height: 1rem;
    width: 20%;
    background-color: black;
`;

const LevelPath = ({ spaces }) => {
    return (
        <Container>
            <Space />
            <Connector />
            <Space />
            <Connector />
            <Space />
        </Container>
    );
};

export default LevelPath;
