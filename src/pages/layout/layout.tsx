import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchContextProvider } from '../../common/contexts/SearchContext';

import Footer from './footer';
import Header from './header';
import helper from './layout.helper';

const Layout: React.FC = (): JSX.Element => {
    const classes = helper.useStyles();

    return (
        <div className={classes.root} >
            <SearchContextProvider>
                <header><Header /> </header>
            </SearchContextProvider>
            <main className={classes.main}> <Outlet /> </main>
            {/* <footer><Footer /></footer> */}
        </div>
    )
}

export default Layout;