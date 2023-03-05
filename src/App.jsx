import data from "./data.json"

function App() {
  
    return (
      <div className="bg-secondary-100 ">
        {
          data? data.map((movies)=>(
            <div className="">
            <img className="rounded-lg h-15 w-10" src={movies.thumbnail} alt="" />
            <h1 className="font-bold">{movies.title}</h1>
            <h2>{movies.genre}</h2>
            <p>{movies.description}</p>
            </div>
          )):null
        } </div>
      
    )
  }

export default App
