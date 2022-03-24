import { PushSpinner } from 'react-spinners-kit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
    },
});

const Spinner = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PushSpinner size={50} color='#3f51b5' />
        </div>
    );
}

export default Spinner;