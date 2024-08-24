import "./ImageCard.css";
function ImageCard() {
  return (
    <div className="ImageCardContainer">
      <img
        className="ImageCardBackground"
        src="https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="ImageCardTextContainer">
        <div className="ImageCardCategory">HUMOUR</div>
        <h2>Freshie Guide to Side Hustles in Insti</h2>
      </div>
    </div>
  );
}

export default ImageCard;
