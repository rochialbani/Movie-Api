import { Link } from "react-router-dom"


function Footer() {
    const Links = [
        {
            title:'Company',
            links:[
                {
                    name:'Home',
                    link:'/'
                },
                {
                    name:'Movies',
                    link:'/allMovies'
                },
                
            ]
        },
        {
            title:'Top Categories',
            links:[
                {
                    name:'Action',
                    link:'#'
                },
                {
                    name:'Romantic',
                    link:'#'
                },
                {
                    name:'Drama',
                    link:'#'
                },
                {
                    name:'Historical',
                    link:'#'
                },
            ]
        },
        {
            title:'My Account',
            links:[
                {
                    name:'Favorites',
                    link:'/favorites'
                },
                {
                    name:'Profile',
                    link:'#'
                },
                {
                    name:'Dashboard',
                    link:'#'
                },
                {
                    name:'Change Password',
                    link:'#'
                },
            ]
        }
    ]
  return (
    <div className="bg-secondary-100 py-4 border-t-2 border-black">
        <div className="container mx-auto px-2">
            <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
                {Links.map((link, index) =>(
                    <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                        <h3 className="text-gray-300 lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">{link.title}</h3>
                        <ul className="text-sm flex flex-col space-y-3">
                            {link.links.map((text, i) =>(
                                <li key={i}className="flex items-baseline">
                                    <Link to={text.link} className="text-gray-500 inline-block w-full hover:text-primary">{text.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 ">
                <Link to='/' className="text-gray-300 text-2xl tracking-wide font-bold uppercase flex justify-start">Mov<span className="text-primary"> ies</span></Link>
                <p className="leading-7 text-sm text-gray-500 mt-3">
                    <span>
                        Lorem 196 Lorem Ipsum, Suite 200, <br/> New York, NY 10007
                    </span>
                    <br/>
                    <span>Tell: +255 754 661 423</span>
                    <br/>
                    <span>Email: info@movies.com</span>
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer