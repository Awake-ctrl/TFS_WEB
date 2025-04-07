import "./ImageCard.css";
function ImageCard(article) {
  const article_date = article.date === '' ? '_-_-_' : article.date;
  const article_subheading = article.subheading === '' || article.subheading === undefined ? article.heading : article.subheading
  return (
    <div className="ImageCardContainer">
      <img className="ImageCardBackground" src={article.imageurl} />
      <div className="ImageCardTextContainer">
        <div className="ImageCardCategory">{article_date}</div>
        <h2 className="ImageCardDescription">{article_subheading}</h2>
      </div>
    </div>
  );
}

export default ImageCard;
