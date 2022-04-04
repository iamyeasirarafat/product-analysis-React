import React from 'react';

const ReviewItem = ({review}) => {
    const {name, company, email, img, reviews, starts} = review
    return (
        <div className ="my-8 border-2 rounded-3xl mr-6 p-3">
            <img className="w-24 rounded-3xl   " src={img} alt="" />
            <h2 className="font-bold text-xl mt-2 text-blue-600">{name}</h2>
            <h2 className="font-bold text-blue-400">owner of: {company}</h2>
            <h2 className="font-semibold text-gray-400">email: {email}</h2>
            <p className="text-gray-900">{reviews}</p>
            <h2 className="font-bold text-pink-500 uppercase mt-4">starts: {starts} star</h2>
        </div>
    );
};

export default ReviewItem;