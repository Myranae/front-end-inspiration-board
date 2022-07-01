import React from "react";

const Card = ({ id, boardId, message, likes }) => {
  return (
    <ul>
      <li>{message}</li>
      {likes}
    </ul>
  );
};

export default Card;
