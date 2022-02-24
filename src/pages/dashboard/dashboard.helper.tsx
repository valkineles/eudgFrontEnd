import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imgList: {
        width: '100%',
    },
    imgListItem: {
        width: '300px',
        height: '70px',
    },

}));

export default { useStyles };