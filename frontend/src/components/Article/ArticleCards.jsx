import './ArticleCard.css';
import { Link } from "react-router-dom";

const ArticleCards = (article) => {
    const DateLink = "#";

    const AuthorOnsetCSSID = "author-page-author-onset";
    const AuthorLink = `/Authors/${article.author || "Anonymous"}#${AuthorOnsetCSSID}`;
    const ArticleOnsetCSSID = "article-page-article-onset";
    const ArticleLink = `/Article/${article.id}#${ArticleOnsetCSSID}`;

    const article_heading = !article.subheading ? article.heading : article.subheading;
    const article_date = !article.date ? '_-_-_' : article.date;
    const article_author = !article.author ? 'Anonymous' : article.author;

    const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    return (
        <div className="art-card-full-container">
            <div className="art-card-full-wrapper">
                <Link className={linkstyles} to={ArticleLink}>
                    <img 
                        className="art-card-image" 
                        src={article.imageurl}
                        alt={article.heading || "Article Image"} 
                    />
                </Link>

                <header className="art-card-header">
                    <ul className="art-card-additional-data">
                        <li className="art-card-date">
                            <Link className={linkstyles2} to={DateLink}>{article_date}</Link>
                        </li>
                        <li className="art-card-author">
                            <Link className={linkstyles2} to={AuthorLink}>{article_author}</Link>
                        </li>
                    </ul>
                    <h1 className="art-card-heading">
                        <Link className={linkstyles} to={ArticleLink}>{article_heading}</Link>
                    </h1>
                </header>

                <div className="art-card-text">
                    <p>{article.description}</p>
                </div>

                <Link className="art-card-read-more-button" to={ArticleLink}>Read More</Link>
            </div>
        </div>
    );
}

export default ArticleCards;
