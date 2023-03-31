import { useState } from "react"
import Title from './title'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper"
import data from "../data.json";
import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import Rating from "./rating"
import { getFavoriteMovie } from '../server/actions'
import { useDispatch } from 'react-redux';

function TopRated({id, title, imdbid, image}) {
    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevEl] = useState(null)
    const dispatch = useDispatch() 
    const className = "hover:bg-dry transition text-sm rounded w-8 h-8 text-white flex flex-col justify-center items-center bg-primary mb-5"

    return (
    <div className="my-16">
        <Title title="Top Rated" Icon={BsBookmarkStarFill}/>
        <div className="mt-10">
            <Swiper 
            navigation={{nextEl, prevEl}} 
            slidesPerView={4} 
            spaceBetween={40} 
            autoplay={true} 
            speed={1000}
            loop={true}
            modules={[Navigation, Autoplay]}
            >
                {
                    data.map((m) => {
                        return(
                            <SwiperSlide key={m.imdbid}>
                                <div className="p-4 h-rate hovered border border-gray-300 bg-secondary-100 rounded-lg overflow-hidden">
                                    <img src={m.image} alt={m.title} className="w-full h-full object-cover rounded-lg"/>
                                    <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                                        <button onClick={() => dispatch(getFavoriteMovie({title:m.title, id:m.id, image:m.image, key:m.imdbid}))} className="w-12 h-12 hoveres transition hover:bg-primary rounded-full bg-white bg-opacity-30 text-white">
                                            <FaHeart/>
                                        </button>
                                        <Link className='font-semibold text-xl text-gray-300 line-clamp-2' to={`/detail/${m.id}`}>{m.title}</Link>
                                        <div className="flex gap-2 text-yellow-600">
                                            <Rating value={m.rating} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="w-full px-1 flex flex-row justify-center items-center gap-6 pt-12">
                <button className={className} ref={(node) => setPrevEl(node)}>
                    <BsCaretLeftFill />
                </button>
                <button className={className} ref={(node) => setNextEl(node)}>
                    <BsCaretRightFill />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopRated