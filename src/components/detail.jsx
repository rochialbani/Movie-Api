import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, clear } from '../server/actions';
import { FaPlay, FaShareAlt, FaHeart } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi';
import Rating from "./rating";
import { getFavoriteMovie } from '../server/actions'

function Detail() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const detail = useSelector((state) => state.movieDetail)
  

  useEffect(() => {
    dispatch(getMovieDetail(id));
    return () => {
      dispatch(clear());
    };
  }, [id, dispatch]);

  const handleClick = () => {
    dispatch(getFavoriteMovie())
  }



  return (
    <div className="w-full xl:h-screen relative text-white">
        <img src={detail.image}
          alt={detail.title}
          className="w-full hidden xl:inline-block h-full object-cover"
        />
        <div className="xl:bg-main bg-tertiary flex flex-col justify-center items-center xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
          <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex flex-col justify-center items-center py-10 lg:py-20 gap-8">
            <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-tertiary border border-gray-800 rounded-lg overflow-hidden">
              <img src={detail.image}
                alt={detail.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
              <div className="col-span-3 flex flex-col gap-10">
                {/** Title */}
                <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                  {detail.title}
                </h1>
                {/**flex items */}
                <div className="flex items-center gap-4 fomt-medium text-gray-300 ">
                  <div className="flex flex-col justify-center items-center bg-primary text-xs px-2 py-1">
                    HD 4K
                  </div>
                  
                  {/*<BannerIcons movie={movie}/>*/}
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleClick()} className='bg-white hover:text-main hover:text-primary transition text-white px-3 py-3 rounded text-sm bg-opacity-30'>
                    <FaHeart/>
                  </button>
                    <div className="flex gap-2 text-yellow-600">
                      <Rating value={detail.rating} />
                    </div>
                </div>

                {/** description */}
                <p className="text-gray-300 text-sm leading-7">{detail.description}</p>
                <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-secondary-900 border border-gray-800 rounded-lg">
                  {/**share */}
                  <div className="col-span-1 flex flex-col justify-center items-center border-r border-gray-700">
                    <button className="w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-20">
                      <FaShareAlt/>
                    </button>
                  </div>
                  {/**language */}
                  <div className="col-span-2 flex flex-col justify-center items-center font-medium text-sm">
                    <p>Language : English</p>
                  </div>
                  {/**watch button*/}
                  <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                    <Link to={detail.trailer} className="bg-tertiary hover:bg-primary transition border border-primary rounded-full flex flex-row justify-center items-center gap-4 w-full sm:py-3">
                      <FaPlay className="w-3 h-3"/> Watch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                <button className="md:w-1/4 w-full relative flex flex-col justify-center items-center bg-primary hover:bg-transparent border-2 border-primary transition md:h-64 h-20 rounded font-medium">
                  <div className="flex flex-row justify-center items-center gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                    Download <FiLogIn className="w-6 h-6"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Detail