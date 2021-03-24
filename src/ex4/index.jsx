/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import './ex4.css';

export const Superhero = (props) => (
  <main>
    <section>
      <div className="personnage">
        <div className="image">
          <img src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" alt="Superhéro A-Bomb" />
        </div>
        <div className="details">
          <p>{props.name}</p>
        </div>
      </div>
    </section>
  </main>
);

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  // je n'ai pas compris comment accéder aux éléments récupérés du json
  return (
    <Superhero name={superheroes.name} />
  );
};
