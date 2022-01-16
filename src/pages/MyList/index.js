import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// Assets
import Anon from '../../assets/images/anon.jpg';
import AnybodyHome from '../../assets/images/anybody-home.jpg';
import ChestnutMan from '../../assets/images/chestnut-man.jpg';
import HellProphecy from '../../assets/images/hell-prophecy.jpg';
import AMishap from '../../assets/images/mishap.jpg';
import Pandora from '../../assets/images/pandora.jpeg';
import Searching from '../../assets/images/searching.jpg';
import SquidGame from '../../assets/images/squid-game.jpg';
import Supernatural from '../../assets/images/supernatural.jpg';
import TheCall from '../../assets/images/the-call.jpg';
import TheVampireDiaries from '../../assets/images/the-vampire-diaries.jpg';
import Traces from '../../assets/images/traces.jpg';

const MyList = () => {
  return (
    <main className="MyList">
      <nav className="menu">
        <Link to={'/moviepage'}>
          <h1 className="menu__logo">Kenai</h1>
        </Link>
      </nav>
      <section className="mylist__title">
        <h2>Minha lista</h2>
        <section className="mylist__movies">
          <img src={Anon} alt="Anon movie cover" />
          <img src={AnybodyHome} alt="Anybody Home movie cover" />
          <img src={ChestnutMan} alt="Chestnut Man movie cover" />
          <img src={HellProphecy} alt="Hell Prophecy movie cover" />
          <img src={AMishap} alt="A Mishap movie cover" />
          <img src={Pandora} alt="Pandora cover" />
          <img src={Searching} alt="Searching movie cover" />
          <img src={SquidGame} alt="Squid Game series cover" />
          <img src={Supernatural} alt="Supernatural series cover" />
          <img src={TheCall} alt="The Call movie cover" />
          <img src={TheVampireDiaries} alt="The Vampire Diaries series cover" />
          <img src={Traces} alt="Traces movie cover" />
        </section>
      </section>
    </main>
  );
};

export default MyList;
