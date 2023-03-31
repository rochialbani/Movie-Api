import { GET_ALL_MOVIES, GET_MOVIE_DETAIL, CLEAR, SEARCH_MOVIE, GET_FAVORITE_MOVIE, REMUVE_FAVORITE_MOVIE } from "./actions";

const initialState={
    allMovies: [],
    movies: [],
    movieDetail: {},
    favorite: []
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_MOVIES:
            return{
                ...state,
                movies: action.payload
            };
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
            }
        case CLEAR:
            return{
                ...state,
                movieDetail: {}
            }
        case SEARCH_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
        case GET_FAVORITE_MOVIE:
            return{
                ...state,
                favorite: [...state.favorite, action.payload]
            }
        case REMUVE_FAVORITE_MOVIE:
            return{
                ...state,
                favorite: state.favorite.filter(movie => movie.imdbid !== action.id)
            }
            default: return {...state}
    };
};

export default rootReducer;