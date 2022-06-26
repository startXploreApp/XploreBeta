import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
