import { Button, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as NotFoundImage } from '../../assets/images/undraw_page_not_found_su7k.svg';

// import { RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles<Theme>(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 150,
        [theme.breakpoints.down('md')]: {
            paddingTop: 30,
        },
        textAlign: 'center',
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560,
        height: 310,
        marginBottom: theme.spacing(6),
    },
}));

const NotFound = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            {/* <Grid container justify='center' spacing={4}> */}
                <Grid item lg={6} xs={12}>
                    <div className={classes.content}>
                        <Typography variant='h4'>404: A página que você está procurando não está aqui.</Typography>
                        <Typography variant='subtitle2'>
                            Você tentou alguma rota inexistente ou veio aqui por engano. Seja o que for, tente usar a
                            navegação.
                        </Typography>

                        <NotFoundImage className={classes.image} />

                        <Button
                            startIcon={<FiHome />}
                            color='primary'
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            {' '}
                            Voltar ao Início{' '}
                        </Button>
                    </div>
                </Grid>
            {/* </Grid> */}
        </div>
    );
};

export default NotFound;