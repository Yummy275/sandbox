import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ScrollWrapper = styled.div`
    height: 50rem;
    background-color: ${(props) => (props.inView ? 'red' : 'green')};
`;

function App() {
    const [test, inView] = useInView({
        threshold: 0.2,
    });

    return (
        <div className="App">
            <div style={{ height: '100vh', backgroundColor: 'blue' }}></div>
            <ScrollWrapper ref={test} inView={inView}></ScrollWrapper>
        </div>
    );
}

export default App;
