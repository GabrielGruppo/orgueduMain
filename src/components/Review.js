import React, { useState } from 'react';
import styles from './Review.module.css';

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      review: 'Praesent dapibus tincidunt augue, vel dapibus diam faucibus id.',
    },
    {
      name: 'David Johnson',
      review: 'Curabitur condimentum, neque non bibendum vulputate, velit sapien posuere arcu.',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviews.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className={styles.review} id="review">
      <h1 className={styles.heading}>customer reviews</h1>

      <div className={styles.slider}>
        <div className={styles.slide}>
          <h2>{reviews[currentSlide].name}</h2>
          <p>{reviews[currentSlide].review}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handlePrevSlide}>Previous</button>
          <button onClick={handleNextSlide}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Review;
