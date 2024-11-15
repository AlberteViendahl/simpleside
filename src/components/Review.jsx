"use client";

import { FaStar } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

    // Udregner gennemsnitsrating
    const averageRating = props.reviewsdata.reviews
        .slice(0, 3)
        .reduce((acc, review) => acc + review.rating, 0) / Math.min(props.reviewsdata.reviews.slice(0, 3).length, 3);

    // Funktion til at generere stjerner
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar 
                    key={i} 
                    color={i < rating ? "gold" : "lightgray"} 
                />
            );
        }
        return stars;
    };

    return (
        <section className="text-background">
            <div className="font-bold text-xl mb-4 m-5">
                <p>Reviews {averageRating.toFixed(1)}</p>
            </div>
            <div className="flex flex-row gap-5 m-5">
                {props.reviewsdata.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="border-b pb-4">
                        <div className="flex flex-row text-yellow-500">
                            {renderStars(Math.round(review.rating))} {/* Runder rating til nærmeste heltal */}
                        </div>
                        <p className="italic">"{review.comment}"</p>
                        <h3 className="font-bold">{review.reviewerName}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
