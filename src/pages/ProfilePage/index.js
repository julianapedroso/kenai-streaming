import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ProfilePage = () => {
  const [users, setUsers] = useState([
    'Maurício Barbosa',
    'Lívia Gomes',
    'Juliana Pedroso',
  ]);

  const getUserName = () => {
    let userName = prompt('Qual o nome de usuário?');
    if (userName != null && !users.includes(userName)) {
      users.push(userName);
      setUsers((users) => [...users]);
      console.log('usuários', users);
    } else {
      alert('Usuário já existe.');
    }
  };

  return (
    <main className="ProfilePage">
      <nav className="menu">
        <Link to={'/:id'}>
          <h1 className="menu__logo">Kenai</h1>
        </Link>
      </nav>
      <section className="profile__container">
        <h1 className="profile__welcome-back">Bem-vindo de volta ao Kenai</h1>
        <h5 className="profile__who-watching">Quem está assistindo?</h5>
        <section className="profiles">
          {users.map((user) => {
            return (
              <div key={user}>
                <Link to={'/:id'}>
                  <div className="profile__wrapper">
                    <div className="profile__item" />
                    <p>{user}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
        <button id="btn__add-profile" onClick={getUserName}>
          Adicionar perfil
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
