import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import data from "../data.json";
import BannerIcons from './bannerIcons';
import { Link } from "react-router-dom";
import {FaHeart} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getFavoriteMovie } from '../server/actions'


function Banner({id, title, imdbid, image}) {
  const dispatch = useDispatch()

  return (
    <div className='relative w-full'>
      <Swiper
        direction='vertical'
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{delay:4000, disableOnInteraction: false}}
        className="xl:w-[1300px] xl:h-96 bg-tertiary lg:h-64 h-48"
      >
        {
          data.slice(0, 4).map((movie, index) => (
            <SwiperSlide key={index} className="relative rounded overflow-hidden ">
              <img src={movie.image} 
              alt={movie.title}
              className="w-full h-[120%] object-fit " /** object-cover h-full */
              />
              <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                <h1 className='text-gray-300 xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>{movie.title}</h1>
                <div className='flex gap-5 items-center text-gray-300'>
                  <BannerIcons movie={movie}/>
                </div>
                <div className='flex gap-5 items-center'>
                  <Link to={`/detail/${movie.id}`} className='bg-primary hover:text-main transition text-white px-6 py-3 rounded font-medium sm:text-sm text-xs'>
                    Movie
                  </Link>
                  <button onClick={() => dispatch(getFavoriteMovie({title:movie.title, id:movie.id, image:movie.image, key:movie.imdbid}))} className='bg-white hover:text-main hover:text-primary transition text-white px-3 py-3 rounded text-sm bg-opacity-30'>
                    <FaHeart/>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Banner;