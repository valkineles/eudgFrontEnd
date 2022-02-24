import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { PushSpinner } from 'react-spinners-kit';

import { useFetch } from '../../common/swr/swr';
import helper from './dashboard.helper';

interface IProducts {
    id: number;
    name: string;
    image_link: string;
}

const Dashboard = () => {
    const classes = helper.useStyles();
    const { data } = useFetch<IProducts[]>('products.json?brand=maybelline');

    if (!data) {
        return (
            <div className={classes.root}>
                <PushSpinner size={50} color='#3f51b5' />
            </div>
        );
    }
    return (<div >
        <ImageList className={classes.imgList}
            cols={4} >
            {data?.map((item) => (
                <ImageListItem key={item.id}
                className={classes.imgListItem}>
                    <img 
                        src={item.image_link}
                        srcSet={item.image_link}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={<span>by: valkineles</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
    );


}

export default Dashboard;