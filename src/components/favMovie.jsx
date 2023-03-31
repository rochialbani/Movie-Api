import { remuveFavoriteMovie } from '../server/actions';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai'

function FavMovie({id, title, imdbid, image}) {
    const dispatch = useDispatch() 

  return (
    <div className="w-[285px] border border-gray-500 p-1 hover:scale-95 transition relative">
        <Link to={imdbid} className="w-full">
            <img className="w-full h-64 object-fit" src={image} alt={title}/>
        </Link> 
        <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-secondary-900 bg-opacity-60 text-gray-300 px-4 py-3">
            <h3 className='font-semibold truncate'>{title}</h3>
            <button onClick={() => dispatch(remuveFavoriteMovie(id))} className='h-9 w-9 text-sm flex flex-col justify-center items-center transition hover:bg-opacity-30 border-2 border-primary rounded-md bg-primary text-white'>
                <AiFillCloseCircle className='w-5 h-5'/>
            </button>
        </div>
    </div>
  )
}

export default FavMovie