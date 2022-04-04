import React from 'react';
import Nav from '../Nav/Nav';
import img from '../../Assests/Images/modelImg.png'
import GetReviews from '../../Hooks/GetReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const [reviews,] =  GetReviews()
   const slicedReviews = reviews.slice(0,3)
   const navigate = useNavigate()
   const reviewBtnHandle = ()=> {
       console.log('btn clicked');
       navigate('/reviews')
   }
   const dashboardBtnHandle = ()=> {
       console.log('btn clicked');
       navigate('/dashboard')
   }
    return (
        <div>
            <Nav></Nav>
            <section className="md:flex md:w-4/5 mx-auto  md:mt-20">
                <div className="w-2/3 mx-auto mt-24">
                    <h2 className="md:text-6xl text-4xl font-bold">Your next T-shirt</h2>
                    <h2 className="md:text-6xl text-4xl font-bold text-blue-500">Your best T-shirt</h2>
                    <p className="text-gray-500 w-full mt-3">Our company is one of the most <span className="text-pink-400">popular</span> companies in Bangladesh. we have <span className="text-pink-400">largest</span> numbers of products available. <span className="text-pink-400">100 % cooton</span> quality products are available. From there you can choose your next <span className="text-pink-400">product</span> easily!</p>
                    <button onClick={dashboardBtnHandle} className="mx-10 my-8 py-3 rounded-lg hover:bg-blue-200 duration-200 ease-in text-blue-700 px-6 bg-blue-100">MONTHLY REVENUE</button>
                </div>
                <div className="mx-auto">
                    <img className="w-full" src={img} alt="" />
                </div>
            </section>
            <section className="w-11/12 grid justify-center mx-auto">
                <h3 className="text-center text-5xl my-12 font-semibold text-blue-600 ">Customer's reviews</h3>
               <div className="md:flex">
               {
                    slicedReviews.map((review => <ReviewItem key={review.id} review = {review}></ReviewItem>))
                }
               </div>
               <button onClick={reviewBtnHandle}  className="mx-10 my-6 py-2 rounded-lg hover:bg-blue-200  duration-200 ease-in text-blue-700 bg-blue-100">See all reviews</button>
            </section>
        </div>
    );
};

export default Home;