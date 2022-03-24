import { useFetch } from '../../common/api/swr/swr';
import Spinner from '../../common/components/spinner/spinner';
import helper from './home.helper';
interface IProducts {
    id: number;
    name: string;
    image_link: string;
    price: number;
}

const Home = () => {
    const classes = helper.useStyles();
    const { data } = useFetch<IProducts[]>('products.json?brand=maybelline');

    if (!data) {

        return (
            <Spinner />
        );
    }
    return (
        <div >
            {data?.map((item) => (
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

            ))}
        </div>
    );


}

export default Home;