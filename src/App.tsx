import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';
import { AddToList }  from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


const App: React.FC = () => {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://people.com/thmb/TFd6HnDdfoj-Zf4QjANQGZCW0dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(8645x4799:8647x4801)/kobe-1-1eac128ebda843969dab0e3d5dceaba2.jpg"
      
    },
    {
        name: "tilak saxena",
        age: 30,
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/recall-salman-sixteen_nine.jpg?VersionId=4oxR2lC2aw.38ZfB98TSkzTEmMhtfULK&size=690:388"
        
      }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export { App };