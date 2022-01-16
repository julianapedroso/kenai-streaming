import React from 'react';
import { Cards } from '../../components';
import './styles.scss';
// Assets
import CdnShang from '../../assets/images/cover-shang.png';
import CdnWishDragon from '../../assets/images/cover-wishdragon.png';
import CdnLoki from '../../assets/images/cover-loki.png';
import CdnSpiderman from '../../assets/images/cover-spiderman.png';
import CdnWitcher from '../../assets/images/cover-witcher.png';
import IRating5 from '../../assets/icons/rating5.svg';
import IRating4 from '../../assets/icons/rating4.svg';
import IRating3 from '../../assets/icons/rating3.svg';

const PopularSection = () => {
  return (
    <main className="PopularSection">
      <article>
        <h2 className="title">Populares</h2>
      </article>
      <section className="section__card">
        <Cards
          image={CdnShang}
          rating={IRating4}
          genre="Ação"
          title="Shang-Chi"
        />
        <Cards
          image={CdnWishDragon}
          rating={IRating3}
          genre="Animação"
          title="Wish Dragon"
        />
        <Cards
          image={CdnLoki}
          rating={IRating5}
          genre="Fantasia"
          title="Loki"
        />
        <Cards
          image={CdnSpiderman}
          rating={IRating5}
          genre="Aventura"
          title="Spider-Man"
        />
        <Cards
          image={CdnWitcher}
          rating={IRating5}
          genre="Fantasia"
          title="The Witcher"
        />
      </section>
    </main>
  );
};

export default PopularSection;
