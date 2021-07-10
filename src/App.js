import React from 'react';
import styled from 'styled-components';
import Era from './components/Era';

const Container = styled.div`
    width: 300%;
    display: flex;
`;

function App() {
    return (
        <Container>
            <Era name="era 1" />
            <Era name="era 2" />
            <Era name="era 3" />
        </Container>
    );
}

export default App;
