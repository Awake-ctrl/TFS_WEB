import './ArticleCard.css';
import { Link } from "react-router-dom";

const ArticleCards = ({id, heading, author, date, description, image, type }) => {
    const DateLink = "#";

    const AuthorOnsetCSSID = "author-page-author-onset";
    const AuthorLink = `/Authors/${author || "Unknown"}#${AuthorOnsetCSSID}`;

    const ArticleOnsetCSSID = "article-page-article-onset";
    const disabled = false;  // Change to `true` if you want to disable links
    const ArticleLink = disabled ? "#" : `/Article/${id}#${ArticleOnsetCSSID}`;

    const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    return (
        <div className="art-card-full-container">
            <Link className={linkstyles} to={ArticleLink}>
                <div className="art-card-full-wrapper">
                    <img 
                        className="art-card-image" 
                        src={image}
                        alt={heading || "Article Image"} 
                    />
                    <header className="art-card-header">
                        <ul className="art-card-additional-data">
                            <li className="art-card-date">
                                <Link className={linkstyles2} to={DateLink}>{date || "Unknown Date"}</Link>
                            </li>
                            <li className="art-card-author">
                                <Link className={linkstyles2} to={AuthorLink}>{author || "Anonymous"}</Link>
                            </li>
                        </ul>
                        <h1 className="art-card-heading">
                            <Link className={linkstyles} to={ArticleLink}>{heading}</Link>
                        </h1>
                    </header>
                    <div className="art-card-text">
                        <p>{description}</p>
                    </div>

                    {!disabled && (
                        <Link className="art-card-read-more-button" to={ArticleLink}>More</Link>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default ArticleCards;
