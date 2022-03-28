import React, { createContext, PropsWithChildren, useContext } from 'react';
import { useFetch } from '../api/swr/swr';
import Spinner from '../components/spinner/spinner';

interface IProducts {
    id: number;
    name: string;
    image_link: string;
    price: number;
}

// interface ISearchContext {
//     data(): IProducts[];
// }

const SearchContext = createContext({});
// const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchContextProvider = ({ children }: PropsWithChildren<{}>) => {

    const { data } = useFetch<IProducts[]>('products.json?brand=maybelline');

    console.log('bbbbbbbbbbbbbbbb',data);
    if (!data) {

        return (
            <Spinner />
        );
    }


    return (
        <SearchContext.Provider
            value={{
                data,
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
