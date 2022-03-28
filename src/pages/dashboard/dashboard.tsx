import { useContext, useState } from 'react';
import { useFetch } from '../../common/api/swr/swr';
import Spinner from '../../common/components/spinner/spinner';
import { useSearchContext } from '../../common/contexts/SearchContext';
import helper from './dashboard.helper';
interface IProducts {
    id: number;
    name: string;
    image_link: string;
    price: number;
}

const Dashboard = () => {
    const classes = helper.useStyles();
    // const { data } = useFetch<IProducts[]>('products.json?brand=maybelline');

    // if (!data) {

    //     return (
    //         <Spinner />
    //     );
    // }

     const  data = useSearchContext();
     

     console.log('aaaaaaaa',data);

    return (
        <div >
            {/* {data?.map((item) => (
                <div className={classes.divContainer}>

                    <div className={classes.ImageItem}>
                        <img className={classes.img}
                            src={item.image_link}
                            srcSet={item.image_link}
                            alt={item.name}
                            loading="lazy"
                        />

                    </div>
                    <div className={classes.divDescription}>
                        <div className={classes.description}>
                            <p>
                                {item.name}
                            </p>
                        </div>
                        <div className={classes.price}>
                            <h1>R$ {new Intl.NumberFormat('pt-PT').format(item.price)}</h1>
                        </div>
                    </div>
                </div>

            ))} */}
        </div>
    );


}

export default Dashboard;