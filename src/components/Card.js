import React from "react";

const Card = ({ id, boardId, message, likes, onLike }) => {
  return (
    <div className="message">
      <p className="message-text">{message}</p>
      <p className="likes">Likes: {likes}</p>
      <button className="like-button" onClick={handleLike}>
        👍
      </button>
    </div>
  );
};

export default Card;
