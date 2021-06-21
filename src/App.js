import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ScrollAction from './components/ScrollAction';
import TestCompTwo from './components/TestCompTwo';

const ScrollWrapper = styled.div`
    height: 50rem;
    background-color: black;
`;

function App() {
    const [test, inView] = useInView({
        threshold: 0.2,
    });

    const [testTwo, inViewTop] = useInView({
        threshold: 0.5,
    });

    return (
        <div className="App">
            <TestCompTwo visible={inViewTop}>
                <div
                    ref={testTwo}
                    style={{ height: '100vh', backgroundColor: 'blue' }}
                ></div>
            </TestCompTwo>
            <ScrollWrapper ref={test}>
                <ScrollAction appear={inView}></ScrollAction>
            </ScrollWrapper>
        </div>
    );
}

export default App;
