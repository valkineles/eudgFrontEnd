import { useSearchContext } from '../../common/contexts/SearchContext';
import helper from './dashboard.helper';

const Dashboard = () => {
    const classes = helper.useStyles();

    const { productList } = useSearchContext();

    console.log(productList)


    if (productList.length === 0) {
        return <div>nenhum dado encontrado</div>
    }

    return (
        <div >
            {productList?.map((item) => (
                <div key={item.id} className={classes.divContainer}>

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

export default Dashboard;