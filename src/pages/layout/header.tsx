import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

import Logo from '../../assets/images/logo.png';
import helper from './layout.helper';

const Header = () => {
    const classes = helper.useStyles();
    return (

        <AppBar position='sticky' className={classes.appBar}>
            <Toolbar >
                <Typography>
                    <a href='/' >
                        <img
                            //  src={Logo}
                            // alt='Eu Digital'
                        ></img>
                    </a>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;