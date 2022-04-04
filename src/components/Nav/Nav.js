import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className=" justify-center flex mt-6">
            <ul className="flex ">
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><Link to = "/">HOME</Link></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><Link to = "/reviews">REVIEWS</Link></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><Link to = "/dashboard">DASHBOARD</Link></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><Link to = "/blogs">BLOGS</Link></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><Link to = "/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;