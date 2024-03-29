import React, { useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchContext } from '../../contexts/SearchContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '17ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

const SearchHeader = () => {
    const {searchHandler} = useSearchContext();

    const [nameSearch, setNameSearch] = useState('');

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        searchHandler(nameSearch);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    name='nameSearch'
                    value={nameSearch}
                    placeholder="O que você procura?"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=>setNameSearch(e.target.value)}
                />
            </Search>
        </form>


    )
}

export default SearchHeader;