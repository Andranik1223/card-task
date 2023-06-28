import { useState } from "react";
import { getRandomNumber } from "./utils/helpers";
import ButtonComponent from './components/buttonComponent';
import CardComponent from "./components/cardComponent";
import './App.css';

function App() {
  const [card, setCard] = useState([]);

  const addCard = () => {
    setCard([...card, getRandomNumber()]);
  };

  const sortCards = () => {
    const arr = [...card];
    arr.sort((a, b) => a - b);
    setCard(arr);
  };

  const deleteCard = (number) => {
    const arr = [...card];
    const index = arr.indexOf(number);
    arr.splice(index, 1);
    setCard(arr);
  }

  const buttonData = [
    { text: 'Add Card', onClick: addCard },
    { text: 'Sort Cards', onClick: sortCards }
  ]

  return (
    <div className="App">
      <div className='main-container'>
        <div className='header-block'>
          {buttonData.map((value) => (
            <ButtonComponent text={value.text} onClick={value.onClick} key={value.text} />
          ))}
        </div>
        <div className='body-block'>
          {card.map((value) => (
            <CardComponent text={value} deleteCard={deleteCard} key={value} />
          ))}
        </div>
        <div className='footer-block'></div>
      </div>
      <div className='side-bar'>
        <p>Press the "Add Card" button to Add a new Card.
          Use the "Sort Cards" button to sort the Cards by the increase.
          Press an X icon on the top right to delete them.
        </p>
      </div>
    </div>
  );
}

export default App;
