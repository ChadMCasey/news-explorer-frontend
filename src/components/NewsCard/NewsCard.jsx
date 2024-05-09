import React from "react";
import "./NewsCard.css";

const NewsCard = ({ card, children }) => {
  const { image, alt, date, title, description, source } = card;

  return (
    <li className="card">
      <img src={image} alt={alt} className="card__img" />
      <div className="card__text-content">
        <div className="card__text-content-top">
          <p className="card-text  card__date">{date}</p>
          <h3 className="card-text card__title">{title}</h3>
        </div>
        <div className="card__text-content-bottom">
          <p className="card-text  card__description">{description}</p>
          <p className="card-text  card__source">{source}</p>
        </div>
      </div>
      {children}
    </li>
  );
};

export default NewsCard;
