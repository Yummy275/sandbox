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
    background-color: ${(props) => (props.beaten ? 'green' : 'orange')};
`;

const Connector = styled.div`
    height: 1rem;
    width: 20%;
    background-color: black;
`;

const LevelPath = ({ beatenLvls }) => {
    return (
        <Container>
            <Space beaten={beatenLvls.length >= 1 ? true : false} />
            <Connector />
            <Space beaten={beatenLvls.length >= 2 ? true : false} />
            <Connector />
            <Space beaten={beatenLvls.length >= 3 ? true : false} />
        </Container>
    );
};

export default LevelPath;
