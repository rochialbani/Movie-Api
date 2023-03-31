import {FaRegCalendarAlt} from 'react-icons/fa';
import {BiTime} from 'react-icons/bi'

function BannerIcons({movie}) {
return (
    <>
        <div className='flex items-center gap-2'>
            <span className='text-sm font-medium'>{movie.genre[0]}</span>
        </div>
        <div className='flex items-center gap-2'>
            <FaRegCalendarAlt className='text-primary w-3 h-3'/>
            <span className='text-sm font-medium'>{movie.year}</span>
        </div>
        <div className='flex items-center gap-2'>
            <BiTime className='text-primary w-3 h-3'/>
            <span className='text-sm font-medium'>{movie.rating}</span>
        </div>
    </>
)
}

export default BannerIcons