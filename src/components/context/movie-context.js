import { useContext, createContext, useReducer } from 'react';
import moviesReducer from '../movies/movie-reducer';
import movieSearchList from '../../data/movie-search-list.json';


const MovieContext = createContext()
const MovieDispatchContext = createContext()

export const MovieProvider = ({children}) => {
  const [movies, dispatch] = useReducer(moviesReducer, movieSearchList.Search)

    return (
        <MovieContext.Provider value={movies}>
            <MovieDispatchContext.Provider value={dispatch}>
            {children}
            </MovieDispatchContext.Provider>
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)
export const useMovieDispatchContext = () => useContext(MovieDispatchContext)
