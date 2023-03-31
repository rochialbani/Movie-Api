import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../server/actions";
import Movies from '../components/movies'
import data from "../data.json";
import Footer from "../components/footer";

function AllMovies() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.allMovies);

  useEffect(()=> {
    dispatch(getAllMovies());
  }, [dispatch])
  
  return (
    <div>
    <div className="grid  xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
      {
        data && data.map((m) => {
          return (
            <Movies
            key={m.imdbid}
            id={m.id}
            image={m.image}
            title={m.title}
            />
          )
        })
      }
      </div>
    <Footer/>
    </div>
  )
}

export default AllMovies