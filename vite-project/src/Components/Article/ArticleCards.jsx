// import React from "react";
 import './ArticleCard.css'
 import image from "../../assets/image.webp"
 import { Link } from "react-router-dom";

const ArticleCards = () => {
    const heading = "Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes";
    const authorName = "Saikiran"; 
    const publicationDate = "24th August, 2024"; 
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus deserunt numquam nobis ipsam corporis, corrupti aliquid consectetur odio ad blanditiis voluptatum, assumenda maiores temporibus necessitatibus. Iusto magni dolores rerum.";
    
    const ArticleLink = "/Article";
    const AuthorLink = `/Authors/${authorName}`;
    const DateLink = "#";

    const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";



    return (
        <div className="art-card-full-container">
            <Link className={linkstyles} to={ArticleLink}>
            <div className='art-card-full-wrapper'>
                <img className="art-card-image" src={image} alt="image" />  
                <header className='art-card-header'>
                    <ul className="art-card-additional-data">
                            <li className='art-card-date'><Link className={linkstyles2} to={DateLink}>{publicationDate}</Link></li>
                            <li className='art-card-author'><Link className={linkstyles2} to={AuthorLink}>{authorName}</Link></li>
                    </ul>
                    <h1 className="art-card-heading"><Link className={linkstyles} to={ArticleLink}>{heading}</Link></h1>
                </header>
                <div className='art-card-text'>
                    <p>{text}</p>     
                </div>
            </div>
            </Link>

        </div>
    );
}

export default ArticleCards;
