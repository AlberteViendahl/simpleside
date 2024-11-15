"use client";

import { FaStar } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

 /*    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                const reviewData = data.products.flatMap(product => 
                    product.reviews.map(review => ({
                        reviewerName: review.reviewerName,
                        comment: review.comment,
                        rating: review.rating,
                    }))
                );
                setReviews(reviewData);
            })
    }, []);
 */
    const averageRating = reviews.slice(0, 3).reduce((acc, review) => acc + review.rating, 0) / Math.min(reviews.slice(0, 3).length, 3);
    let image = "<FaStar/>";

    for (let i = 0; i < reviews.length; i++) {
      image += reviews[i] + "<br>";
    }


    return (
        <section className="text-background">
           {}
                <div className="font-bold text-xl mb-4 m-5">
                    <p>Reviews {averageRating.toFixed(1)}</p>
                </div>
            <div className="flex flex-row gap-5 m-5">

                {}
                {props.reviewsdata.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="border-b pb-4">
                        <p className="text-yellow-500">{review.rating}</p><FaStar />
                        <p className="italic">"{review.comment}"</p>
                        <h3 className="font-bold">{review.reviewerName}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
