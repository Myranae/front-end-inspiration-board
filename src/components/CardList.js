import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards }) => {
  const getCardListJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          likes={card.likes}
          boardId={card.boardId}
        />
      );
    });
  };
  return (
    <ul>
      <div>{getCardListJSX(cards)}</div>
    </ul>
  );
};

export default CardList;
