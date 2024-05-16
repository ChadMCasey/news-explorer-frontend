import "./NewsCard.css";

const NewsCard = (props) => {
  const { image, link, date, title, text, source } = props.card;

  const handleCardClick = (e) => {
    if (
      !e.target.classList.contains("card__trash") &&
      !e.target.classList.contains("bookmark")
    ) {
      window.open(link, "_blank");
    }
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__img-container">
        <img src={image} alt={title} className="card__img" />
      </div>

      <div className="card__text-content">
        <div className="card__text-content-top">
          <p className="card-text  card__date">{date}</p>
          <h3 className="card-text card__title">{title}</h3>
        </div>
        <div className="card__text-content-bottom">
          <p className="card-text  card__description">{text}</p>
          <p className="card-text  card__source">{source}</p>
        </div>
      </div>
      {props.children}
    </li>
  );
};

export default NewsCard;
