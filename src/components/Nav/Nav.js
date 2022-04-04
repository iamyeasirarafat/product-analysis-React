import React from 'react';
import { NavLink, } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className=" justify-center flex mt-6">
            <ul className="flex ">
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><NavLink  style={({ isActive }) => {
             return {color: isActive ? "rgb(244 114 182)" : "",};
             }}  to = "/">HOME</NavLink></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><NavLink  style={({ isActive }) => {
             return {color: isActive ? "rgb(244 114 182)" : "",};
             }} to = "/reviews">REVIEWS</NavLink></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><NavLink  style={({ isActive }) => {
             return {color: isActive ? "rgb(244 114 182)" : "",};
             }} to = "/dashboard">DASHBOARD</NavLink></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><NavLink style={({ isActive }) => {
             return {color: isActive ? "rgb(244 114 182)" : "",};
             }}  to = "/blogs">BLOGS</NavLink></li>
                <li className="mr-2 duration-200 ease-in font-semibold px-4 pb-1 hover:text-pink-400 hover:border-pink-400 border-b-2"><NavLink style={({ isActive }) => {
             return {color: isActive ? "rgb(244 114 182)" : "",};
             }}  to = "/about">ABOUT</NavLink></li>
               
            </ul>
        </nav>
    );
};

export default Nav;