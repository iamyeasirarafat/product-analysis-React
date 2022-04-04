import React from 'react';
import GetReviews from '../../Hooks/GetReviews';
import Nav from '../Nav/Nav';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviews] = GetReviews()
    console.log(reviews);
    return (
        <div className="">
            <Nav>3</Nav>
        <div className="w-11/12 mx-auto">
            <h2 className="text-5xl text-center mt-10 mb-6">What our <span className="text-pink-400">customers</span> says</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2">
                {
                    reviews.map((review => <ReviewItem key={review.id} review = {review}></ReviewItem>))
                }
            </div>
        </div>
        </div>
    );
};

export default Reviews;