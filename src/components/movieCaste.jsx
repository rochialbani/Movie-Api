import { FaUserFriends } from 'react-icons/fa';
import { Autoplay } from 'swiper';
import Swiper from 'swiper/react';
import Title from './title';

function MovieCasts() {
  return (
    <div className="my-12">
        <Title title="Casts" Icon={FaUserFriends}/>
        <div className='mt-10'>
            <Swiper autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }} loop={true} speed={1000} module={[Autoplay]}
            spaceBetween= {10}
            breakpoints={{
                0:{
                    slidesPerView: 1,
        
                },
                400:{
                    slidesPerView: 2,
                    
                },
                768:{
                    slidesPerView: 3,
                    
                },
                1024:{
                    slidesPerView: 4,
                    
                },
                1280:{
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
            >

            </Swiper>
        </div>
    </div>
  )
}

export default MovieCasts