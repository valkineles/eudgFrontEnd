import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import useApi from '../api/axios/api';
import { useFetch } from '../api/swr/swr';
import Spinner from '../components/spinner/spinner';
import { mutate } from 'swr'

interface IProducts {
    id: number;
    name: string;
    image_link: string;
    price: number;
}

interface ISearchContext {
    productList: IProducts[];
    searchHandler: (parameter: string) => void;

}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchContextProvider = ({ children }: PropsWithChildren<{}>) => {

    const [product, setProduct] = useState<IProducts[]>();
    const [key, setKey] = useState('products.json?brand=maybelline')

    const { data } = useFetch<IProducts[]>(key);

    const searchHandler = async (param: string) => {
        param ? setKey(`products.json?brand=${param}`) : setKey('products.json?brand=maybelline')
    };

    useEffect(() => {

        setProduct(data);

    }, [data])

    if (!product) {

        return (
            <Spinner />
        );
    };

    return (
        <SearchContext.Provider
            value={{
                productList: product,
                searchHandler,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => {
    const ctx = useContext(SearchContext);

    if (!ctx) {
        throw new Error('SearchContext não foi encontrado!');
    }

    return ctx;
};
