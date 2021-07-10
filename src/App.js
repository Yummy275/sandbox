import React, { useState } from 'react';
import styled from 'styled-components';
import Era from './components/Era';

const Container = styled.div`
    width: 300%;
    display: flex;

    transition: transform 0.3s ease;

    transform: translate(
        ${(props) =>
            props.era === '1'
                ? '0%'
                : props.era === '2'
                ? '-33.33%'
                : props.era === '3'
                ? '-66.66%'
                : ''}
    );
`;

function App() {
    const [era, setEra] = useState('1');

    const changeEra = (eraName) => {
        setEra(eraName);
    };

    return (
        <>
            <Container era={era}>
                <Era name="era 1" changeEra={() => changeEra('2')} />
                <Era name="era 2" changeEra={() => changeEra('3')} />
                <Era name="era 3" changeEra={() => changeEra('1')} />
            </Container>
        </>
    );
}

export default App;
