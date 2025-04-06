import "./ImageCard.css";
function ImageCard(article) {
  return (
    <div className="ImageCardContainer">
      <img className="ImageCardBackground" src={article.imageurl} />
      <div className="ImageCardTextContainer">
        <div className="ImageCardCategory">{article.date}</div>
        <h2 className="ImageCardDescription">{article.subheading}</h2>

      </div>
    </div>
  );
}

export default ImageCard;
