import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "John Deo",
    role: "Happy Customer",
    review:
      "Absolutely stunning flowers! I ordered a bouquet for my anniversary, and the freshness and arrangement were beyond expectations. BlossomBay-Flower truly delivers excellence!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Happy Customer",
    review:
      "As a florist myself, I appreciate the attention to detail in every bouquet. The color combinations and premium flower quality from BlossomBay-Flower are unmatched. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Happy Customer",
    review:
      "BlossomBay-Flower made my wedding décor dream come true! The floral arrangements were fresh, elegant, and delivered on time. Exceptional service and craftsmanship.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Loyal Customer",
    review:
      "I’ve been a customer for over a year, and every order is perfect. The flowers last long, the packaging is beautiful, and the customer service is outstanding. A must-try for flower lovers!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="review-stars">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index}>★</span>
      ))}
      {halfStar && <span>★</span>}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="review-section" id="reviews">
      <h2 className="review-title">
        Watch Customer's <span>Reviews</span>
      </h2>

      <div className="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <StarRating rating={review.rating} />
            <p className="review-text">{review.review}</p>

            <div className="review-footer">
              <img
                src={review.image}
                alt={review.name}
                className="review-img"
              />
              <div className="review-details">
                <h3 className="review-name">{review.name}</h3>
                <p className="review-role">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
