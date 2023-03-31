import { Link } from "react-router-dom";
//import SearchBar from "./searchBar";

function Header() {
  return (
    <header className="bg-secondary-100 h-[7vh] md:h-[10vh] p-8 border-b border-secondary-100 flex items-center space-x-[640px]">
      <Link to='/' className="text-gray-300 text-2xl tracking-wide font-bold uppercase flex justify-start">Mov<span className="text-primary"> ies</span></Link>
      <div className="flex items-center justify-end gap-2">
          
          <Link to='/' className="ml-10 text-sm text-gray-300 uppercase">Home</Link>
          <Link to='/allMovies' className="ml-10 text-sm text-gray-300 uppercase">Movies</Link>
          <Link to='/favorites' className="ml-10 text-sm text-gray-300 uppercase">Favorites</Link>
          {/*<SearchBar/>*/}  
      </div>
      
    </header>
  )
}

export default Header