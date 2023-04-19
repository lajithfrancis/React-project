export default function moviesReducer(movies, action) {
    switch (action.type) {
        case 'replace': {
            return [action.movie];
        }
        case 'initiate': {
            return action.movies
        }
        case 'deleted': {
            return movies.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
