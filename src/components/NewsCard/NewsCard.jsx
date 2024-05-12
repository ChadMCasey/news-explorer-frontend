import "./NewsCard.css";

const NewsCard = (props) => {
  const { imgUrl, publishedAt, title, description, source } = props.card;

  return (
    <li className="card">
      <div className="card-img__container">
        <img src={imgUrl} className="card__img" />
      </div>

      <div className="card__text-content">
        <div className="card__text-content-top">
          <p className="card-text  card__date">{publishedAt}</p>
          <h3 className="card-text card__title">{title}</h3>
        </div>
        <div className="card__text-content-bottom">
          <p className="card-text  card__description">{description}</p>
          <p className="card-text  card__source">{source}</p>
        </div>
      </div>
      {props.children}
    </li>
  );
};

export default NewsCard;
