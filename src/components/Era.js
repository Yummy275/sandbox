import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LevelPath from './LevelPath';

const Container = styled.div`
    width: 100%;
`;

const Title = styled.h1`
    text-align: center;
`;

const BeatLvlBtn = styled.div`
    background-color: green;
    padding: 1rem;
    width: fit-content;
    margin: 5rem auto;
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
`;

const Era = ({ name, changeEra }) => {
    const [beatenLevels, setBeatenLevels] = useState([]);

    const buttonClick = () => {
        if (beatenLevels.length === 3) {
            changeEra();
        } else {
            const beaten = beatenLevels.map((val) => {
                return val;
            });
            const newVal = beaten.length + 1;
            beaten.push(newVal);
            setBeatenLevels(beaten);
        }
    };

    return (
        <Container>
            <Title>{name}</Title>
            <LevelPath beatenLvls={beatenLevels} />
            <BeatLvlBtn onClick={buttonClick}>
                Beat {`${beatenLevels.length === 3 ? 'Era' : 'Lvl'}`}
            </BeatLvlBtn>
        </Container>
    );
};

export default Era;
