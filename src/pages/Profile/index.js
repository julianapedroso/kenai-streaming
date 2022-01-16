import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Profile = () => {
  return (
    <main className="Profile">
      <nav className="menu">
        <Link to={"/"}>
          <h1 className="menu__logo">Kenai</h1>
        </Link>
      </nav>
      <section className="profile__container">
        <h1 className="profile__welcome-back">Bem-vindo de volta ao Kenai</h1>
        <h5 className="profile__who-watching">Quem está assistindo?</h5>
        <section className="profiles">
          <div className="profile__wrapper">
            <div className="profile__1" />
            <p>Maurício Barbosa</p>
          </div>
          <div className="profile__wrapper">
            <div className="profile__2" />
            <p>Lívia Gomes</p>
          </div>
          <div className="profile__wrapper">
            <div className="profile__3" />
            <p>Juliana Pedroso</p>
          </div>
        </section>
        <button id="btn__add-profile">Adicionar perfil</button>
      </section>
    </main>
  );
};

export default Profile;
