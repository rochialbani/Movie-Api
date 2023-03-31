import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/movieDetail";
import Favorites from "./pages/favorites"
import Header from "./components/header";
import AllMovies from "./pages/allMovies";
import Search from "./pages/movieDetail"

function App() {

    return (
      <div>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/favorites" element={<Favorites/>}/>
        <Route exact path="/allMovies" element={<AllMovies/>}/>
        <Route exact path="/moviesSearch/:id" element={<Search/>}/>
        </Routes>
        
      </div>
    )
  }

export default App
