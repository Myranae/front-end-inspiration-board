import axios from "axios";
import { useEffect, useState } from "react";

const cardApiToJson = (card) => {
  const { id, board_id: boardId, likes, message } = card;
  return { id, boardId, likes, message };
};

function App() {
  return <div className="App"></div>;
}

export default App;
