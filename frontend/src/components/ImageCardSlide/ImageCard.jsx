import "./ImageCard.css";
function ImageCard({ image, category, heading }) {
  return (
    <div className="ImageCardContainer">
      <img className="ImageCardBackground" src={image} />
      <div className="ImageCardTextContainer">
        <div className="ImageCardCategory">{category.toUpperCase()}</div>
        <h2 className="ImageCardDescription">{heading}</h2>
      </div>
    </div>
  );
}

export default ImageCard;
