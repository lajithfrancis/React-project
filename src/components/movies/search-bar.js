import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMovieContext, useMovieDispatchContext } from '../context/movie-context';
import movieSearchList from '../../data/movie-search-list.json';



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
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBar({ children }) {
    const [search, setSearch] = useState('');
    const dispatch = useMovieDispatchContext();

    const handleOnChange = async (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const searchMovies = async (search) => {
            const searchResult = await axios.get(`https://www.omdbapi.com/?apikey=e7570bb3&t=${search}`)
            if (searchResult.data.Response !== 'False') {
                dispatch({
                    type: 'replace',
                    movie: searchResult.data
                })
                console.log('got results!!!', searchResult.data)
            } else {
                dispatch({
                    type: 'initiate',
                    movies: movieSearchList.Search
                })
            }
        }
        searchMovies(search)
    }, [search, dispatch]);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MOViE
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={async (e) => await handleOnChange(e)}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
        </>

    );
}
