import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            width: '100vw',
            height: '100vh',
        },

        divContainer: {
            gap: '1rem',
            columnGap: '1rem',
            width: '220px',
            height: '410px',
            borderRadius: '3px',
            margin: '9px 9px 9px 0',
            overflow: 'hidden',
            display: 'inline-block',
            position: 'relative',
            background: 'white',
            padding: theme.spacing(0.5),
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                width: '100%',
                height: '140px',
            },


        },
        ImageItem: {
            textAlign: 'center',
            width: '186px',
            height: '50%',
            [theme.breakpoints.down('sm')]: {
                height: 'auto',
            }
        },
        img: {
            height: '186px',
            width: '186px',
            [theme.breakpoints.down('sm')]: {
                height: '130px',
                width: '130px',

            }

        },
        divDescription: {
            width: '100%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
                height: 'auto',
            }

        },

        description: {
            textAlign: 'justify',
            height: '70%',
            alignItems: 'center',
        },
        price: {
            height: '30%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
        }
    })
);


export default { useStyles };