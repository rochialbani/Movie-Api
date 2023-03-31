import { useSelector } from "react-redux";
import FavMovie from "../components/favMovie";


function Favorites() {
  const moviesFav = useSelector(state => state.favorite)
  
  return (
    
    <div className="grid  xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
      { moviesFav && moviesFav.map(m => (
        <FavMovie
        key={m.imdbid}
        id={m.id}
        image={m.image}
        title={m.title}
        />
          
        
      ))}
      </div>
  )
}

export default Favorites