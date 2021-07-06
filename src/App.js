import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import styled from 'styled-components';

const Test = styled.div`
    height: 4rem;
    width: 4rem;
`;

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <button onClick={themeToggler}>Switch Theme</button>
                    <div>Hello</div>
                    <Test>TESTING</Test>
                    <Test>HERE I AM</Test>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
