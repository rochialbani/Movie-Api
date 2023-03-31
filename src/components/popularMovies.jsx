import Title from './title'
import { BsCollectionFill } from 'react-icons/bs'
import data from "../data.json";
import Movies from '../components/movies'

function PopularMovies() {
  return (
    <div className="my-16">
        <Title title="Popular Movies" Icon={BsCollectionFill}/>
        <div className='grid sm:mt-12 mt-6 ml-9 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
            {
                data.slice(0, 8).map((m) => {
                    return(
                    <Movies
                    key={m.imdbid}
                    id={m.id}
                    image={m.image}
                    title={m.title}
                    />
                )})
            }
        </div>
    </div>
    
  )
}

export default PopularMovies