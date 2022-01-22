import React, { useState, useEffect } from 'react';
import './styles.scss';
// API
import api from '../../services/api';
// Component
import { Cards } from '../../components';

const PopularSection = () => {
  const [synopses, setSynopses] = useState([]);

  useEffect(() => {
    getSynopsesListItem();
  }, []);

  const getSynopsesListItem = async () => {
    try {
      const response = await api.get('/synopses');
      setSynopses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="PopularSection">
      <article>
        <h2 className="title">Populares</h2>
      </article>
      <section className="section__card">
        {synopses?.map((item) => {
          const { id, title, coverUrl, genre, rating, synopsis } = item;
          return (
            <Cards
              key={id}
              image={coverUrl}
              title={title}
              genre={genre}
              rating={rating}
              synopsis={synopsis}
            />
          );
        })}
      </section>
    </main>
  );
};

export default PopularSection;
