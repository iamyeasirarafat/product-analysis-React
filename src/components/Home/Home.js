import React from 'react';
import Nav from '../Nav/Nav';
import img from '../../Assests/Images/modelImg.png'

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <section className="md:flex w-4/5 mx-auto mt-20">
                <div className="w-2/3 mt-24">
                    <h2 className="text-6xl font-bold">Your next T-shirt</h2>
                    <h2 className="text-6xl font-bold text-blue-500">Your best T-shirt</h2>
                    <p className="text-gray-500 mt-3">Our company is one of the most <span className="text-pink-400">popular</span> companies in Bangladesh. we have <span className="text-pink-400">largest</span> numbers of products available. <span className="text-pink-400">100 % cooton</span> quality products are available. From there you can choose your next <span className="text-pink-400">product</span> easily!</p>
                    <button className="mx-10 my-6 py-3 rounded-lg hover:bg-blue-200 duration-200 ease-in text-blue-700 px-6 bg-blue-100">REVIEWS</button>
                </div>
                <div className="">
                    <img className="w-full" src={img} alt="" />
                </div>
            </section>
            <section className="">
                {
                    
                }
            </section>
        </div>
    );
};

export default Home;