import { RiSearchLine} from "react-icons/ri";
import { search } from "../server/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies)
  

  function handleInputChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(search(e.target.value));
    setQuery("");
  }

  return (
    <div className="ml-5 flex items-center ">
        <form className="relative" onSubmit={(e) => handleSubmit(e)}>
            <RiSearchLine className="absolute text-gray-300 m-3"/>
            <input 
            className="bg-secondary-900 text-gray-300 rounded-full py-2 pr-2 pl-12"
            type="text" 
            placeholder="Search movies title"
            value={query}
            onChange={(e) => handleInputChange(e)}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
            />
        </form>
        {/*
          movies && movies.map((m) => {
            return (
              <div key={m.imdbid}>{m.title}</div>
            )})
            */}
    </div>
  )
}

export default SearchBar