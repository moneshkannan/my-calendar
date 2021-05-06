import React from 'react';

import './stylo.scss';
import Particles from './Particles.jsx';
import Hero from './Hero.jsx';
import Card from './Card.jsx';
import Image from './Image.jsx';

export default function Dev() {
  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            {/* <Info /> */}
            <div style={{textAlign: 'center'}}>
            <h3 style={{color:"white"}}>Our Team</h3>
            <p style={{color:"white", fontFamily:"cursive"}}>Appointy helps you schedule meetings without the back-and-forth emails. Appointy allows you to schedule the meetings, manage users into your application and also allows you to retrieve appointy links.</p>
            </div>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5"> {/* row */}
              {cards.map((card, i) => (
                <div className="column"> {/*column*/}
                  <Card>
                    <Image ratio={card.imageRatio} src={card.image} />{/*ratio={card.imageRatio} */}
                    <div className="card-title text-center">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}
const cards = [
  {
    title: 'Praveena',
    description:
      'Developer',
    image: 'https://avatars.githubusercontent.com/u/80034428?v=4',
    imageRatio: 784 / 1016
  },
  {
    title: 'Pavithran',
    description:
      'Developer',
    image: 'https://avatars.githubusercontent.com/u/73075861?v=4',
    imageRatio: 839 / 1133
  },
  {
    title: 'Santhosh',
    description:
      "Developer",
    image: 'https://avatars.githubusercontent.com/u/80448583?v=4',
    imageRatio: 730 / 1030
  },
  {
    title: 'Rahul Krishnan',
    description:
      "Developer",
    image: 'https://avatars.githubusercontent.com/u/64530360?v=4',
    imageRatio: 730 / 1030
  },
  {
    title: 'Monesh Kannan',
    description:
      "Developer",
    image: 'https://avatars.githubusercontent.com/u/58912902?v=4',
    imageRatio: 730 / 1030
  }
];
