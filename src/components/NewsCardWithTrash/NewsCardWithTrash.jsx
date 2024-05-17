import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithTrash.css";

const NewsCardWithTrash = (props) => {
  const { card, removeBookMarkedCard } = props;

  return (
    <NewsCard {...props}>
      <button
        className="card-abs card__trash"
        onClick={() => removeBookMarkedCard(card)}
      ></button>
      <div className="card-abs card__remove-callout">
        Remove
        <span className="card__remove-callout-desktop"> from saved</span>
      </div>
      <div className="card-abs card__keyword">
        {card.keyword.length > 12
          ? `${card.keyword.slice(0, 12)}...`
          : card.keyword}
      </div>
    </NewsCard>
  );
};

export default NewsCardWithTrash;
