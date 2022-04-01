import './index.css';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { SearchContextProvider } from './common/contexts/SearchContext';

// import { AuthContextProvider } from './contexts/AuthContext';

const theme = createTheme({
    typography: {
        htmlFontSize: 10,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SearchContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SearchContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);