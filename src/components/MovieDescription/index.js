import React from 'react';
import './styles.scss';
// Assets
import IStar from '../../assets/icons/star-group.svg';
import ITime from '../../assets/icons/time.svg';

const MovieDescription = () => {
  return (
    <main className="MovieDescription">
      <section className="movie__content">
        <button id="btn__action">Ação</button>
        <article className="icons">
          <img className="icon__stars" src={IStar} alt="Star icon" />
          <img className="icon__clock" src={ITime} alt="Clock icon" />
          <small className="movie__time">1h 57m</small>
        </article>
        <h1 className="movie__title">Batman</h1>
        <p className="movie__description">
          Após a morte de seus pais, o jovem bilionário Bruce Wayne (Ben
          Affleck) age como vigilante noturno em Gotham City. No entanto, uma
          série de crimes desafiará as suas habilidades heróicas. Enquanto isso,
          o Charada (Paul Dano) decide fazer um jogo de gato e rato com Bruce e
          o comissário James Gordon (Jeffrey Wright). Mas Batman representa a
          justiça e não deixará o mal vencer essa batalha.
        </p>
        <button id="btn__watch-now">Assistir agora</button>
      </section>
    </main>
  );
};

export default MovieDescription;
