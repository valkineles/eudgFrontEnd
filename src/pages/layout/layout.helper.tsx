import { Theme, useTheme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            backgroundColor: '#EBEBEB',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        iconsHeaderAvatarClose: {
            marginLeft: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        toolbar: theme.mixins.toolbar,
        desktopDrawer: {
            width: drawerWidth,
        },
        mobileDrawer: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        box: {
            // mr: 2,
            // flexDirection: 'row',
            // marginRight: theme.spacing(2),
            display: 'flex',
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
        main: {
            flexGrow: 1,
            padding: theme.spacing(2),
            display: 'flex',
            overflowX: 'hidden',
            justifyContent: 'center',
        },

        avatar: {
            cursor: 'pointer',
            width: 64,
            height: 64,
            marginBottom: '4px',
        },
        name: {
            fontSize: '16px',
            fontWeight: 500,
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    })
);

export default { useStyles, useTheme };