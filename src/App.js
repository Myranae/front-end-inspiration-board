import axios from "axios";
import { useEffect, useState } from "react";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

const cardApiToJson = (card) => {
  const { id, board_id: boardId, likes, message } = card;
  return { id, boardId, likes, message };
};

// const addCard = (cardData) => {
//   const requestBody = { ...cardData, likes: 0 };

//   return axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, requestBody)
//     .then((response) => {
//       return cardApiToJson(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//       throw new Error("error adding card");
//     });
// };

const getCards = (id) => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`)
    .then((response) => {
      return response.data.cards.map(cardApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

getCards();
function App() {
  const [cardData, setCardData] = useState([]);

  const updateCards = () => {
    getCards().then((card) => {
      setCardData(card);
    });
  };

  useEffect(() => {
    updateCards();
  }, []);

  return (
    <div className="App">
      <CardForm />
      <CardList cards={cardData} />
    </div>
  );
}

export default App;
