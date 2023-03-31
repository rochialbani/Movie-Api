import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllMovies, getFavoriteMovie } from '../server/actions'
import { FaHeart } from 'react-icons/fa'



function Movies({id, title, imdbid, image}) {
  const dispatch = useDispatch() 

  return (
    
    <div className=" w-[285px] border border-gray-500 p-1 hover:scale-95 transition relative">
      <Link to={`/detail/${id}`} onClick={() => dispatch(getAllMovies(id))} className="w-full">
            <img className="w-full h-64 object-fit" src={image} alt={title}/>         
      </Link>
      <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-secondary-900 bg-opacity-60 text-gray-300 px-4 py-3">
        <h3 className='font-semibold truncate'>{title}</h3>
        <button onClick={() => dispatch(getFavoriteMovie({title:title, id:id, image:image, key:imdbid}))} className='h-9 w-9 text-sm flex flex-col justify-center items-center transition hover:bg-opacity-30 border-2 border-primary rounded-md bg-primary text-white'>
          <FaHeart/>
        </button>
      </div> 
    </div>
   
    
  )
}

export default Movies;