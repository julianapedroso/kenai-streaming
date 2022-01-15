import React from 'react';
import './styles.scss';

const Cards = ({ title, image, genre, rating }) => {
  return (
    <main className="Cards">
      <section className="card__container">
        <img className="card__banner" src={image} alt="" />
        <article className="card__info">
          <button id="btn__genre">{genre}</button>
          <img src={rating} alt="" />
          <h3>{title}</h3>
        </article>
      </section>
    </main>
  );
};

export default Cards;
