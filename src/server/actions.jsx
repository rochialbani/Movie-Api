const { API_KEY } = process.env;
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const CLEAR= 'CLEAR';
export const SEARCH_MOVIE='SEARCH_MOVIE';
export const GET_FAVORITE_MOVIE='GET_FAVORITE_MOVIE';
export const REMUVE_FAVORITE_MOVIE= 'REMUVE_FAVORITE_MOVIE'


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};


export function getAllMovies(){
    return async function(dispatch){
        try{
            fetch(`https://imdb-top-100-movies.p.rapidapi.com/`, options)
	        .then(response => response.json())
	        .then(response => dispatch({type: GET_ALL_MOVIES, payload:response}))
	        
        }
        catch(error){
            console.log(error)
        }
    }
}



export function getMovieDetail(id){

    return async function(dispatch){
        try{
            fetch(`https://imdb-top-100-movies.p.rapidapi.com/${id}`, options)
	        .then(response => response.json())
	        .then(response => dispatch({type: GET_MOVIE_DETAIL, payload:response}))
	        
        }
        catch(error){
            console.log(error)
        }
    }
}

export const clear = () => {
    return { type: CLEAR}
}

export function search(id){
    return async function(dispatch){
        try{
            fetch(`https://imdb-top-100-movies.p.rapidapi.com/${id}`, options)
	        .then(response => response.json())
	        .then(response => dispatch({type: SEARCH_MOVIE, payload:response}))
	        
        }
        catch(error){
            console.log(error)
        }
    }
}



/*export function search(title){
   return{
    type: SEARCH_MOVIE, payload: title
   }
}*/

export function getFavoriteMovie(movie){
    return{
        type: GET_FAVORITE_MOVIE, payload: movie
    }  
}

export function remuveFavoriteMovie(id){
    return{
        type: REMUVE_FAVORITE_MOVIE, payload: id
    }  
}



