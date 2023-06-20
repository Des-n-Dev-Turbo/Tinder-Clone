import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';
import db from '../../DB/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const TinderCards = () => {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const poepleCollection = collection(db, 'people');

    const unsubscribe = onSnapshot(poepleCollection, (snapshot) => {
      const peopleData = [];

      snapshot.forEach((doc) => {
        peopleData.push({ id: doc.id, ...doc.data() });
      });

      setPeople([...peopleData]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="tinder-cards">
      <div className="tinder-cards__card-container">
        {people?.map((person) => (
          <TinderCard className="swipe" key={person.id} preventSwipe={['up', 'down']}>
            <div style={{ backgroundImage: `url(${person.url})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
