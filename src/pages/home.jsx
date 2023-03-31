import PopularMovies from "../components/popularMovies";
import Banner from "../components/banner";
import TopRated from '../components/topRated'
import Footer from "../components/footer";


function Home() {
  return (
    <div className="w-full h-screen ">
      <Banner/>
      <PopularMovies/>
      <TopRated/>
      <Footer/>
    </div>
  )
}

export default Home