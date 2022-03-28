import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import helper from './layout.helper';
import SearchHeader from '../../common/components/SearchHeader/SearchHeader';



const Header = () => {
    const classes = helper.useStyles();
    return (

        <AppBar 
        position='sticky' 
        className={classes.appBar}
        onSubmit={()=>{ console.log( 'SUBMIT')}}
        >
            <Toolbar >
                <Typography>
                    <a href='/' >
                        <img
                        //   src={Logo}
                        //  alt='Eu Digital'
                        ></img>
                    </a>
                </Typography>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    
                >
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Typography>

                <SearchHeader/>

            </Toolbar>
        </AppBar>
    )
}
export default Header;