import React, { useState } from 'react';
import './styles.scss';
// Component
import { Modal } from '../../components';

const Cards = (props) => {
  const { title, image, genre, rating, synopsis } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <main className="Cards">
      <section className="card__container" onClick={() => setIsModalVisible(!isModalVisible)}>
        <img className="card__banner" src={image} alt="Movie Cover" />
        <article className="card__info">
          <button id="btn__genre">{genre}</button>
          <img src={rating} alt="Movie rating" />
          <h3>{title}</h3>
        </article>
      </section>
      <section className="card__synopsis">
        <main className="card__synopsis-content">
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(!isModalVisible)}>
                <p>{synopsis}</p>
              </Modal>
            ) : null}
        </main>
      </section>
    </main>
  );
};

export default Cards;
