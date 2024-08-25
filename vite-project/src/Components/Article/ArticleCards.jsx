// import React from "react";
 import './ArticleCard.css'
 import image from "../../assets/image.webp"

const ArticleCards = () => {
    const heading = "Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes";
    const authorName = "Saikiran"; 
    const publicationDate = "24th August, 2024"; 
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus deserunt numquam nobis ipsam corporis, corrupti aliquid consectetur odio ad blanditiis voluptatum, assumenda maiores temporibus necessitatibus. Iusto magni dolores rerum.";

    return (
        <div className="art-card-full-container">
            <div className='art-card-full-wrapper'>
                <img className="art-card-image" src={image} alt="image" />  
                <header className='art-card-header'>
                    <ul className="art-card-additional-data">
                            <li className='art-card-date'><a href="#">{publicationDate}</a></li>
                            <li className='art-card-author'><a href="#">{authorName}</a></li>
                    </ul>
                    <h1 className="art-card-heading"><a href="#">{heading}</a></h1>
                </header>
                <div className='art-card-text'>
                    <p>{text}</p>     
                </div>
            </div>
        </div>
    );
}

export default ArticleCards;
