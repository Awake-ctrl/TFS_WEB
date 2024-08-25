// import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.webp"
import './Article.css'

const Article = () => {
    const heading = "Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes";
    const authorName = "Saikiran"; 
    const publicationDate = "24th August, 2024"; 

    return (
        <div className="rect-full-container">
            <div className='rect-full-wrapper'>
                <header className='rect-header'>
                    <h1 className="rect-heading">{heading}</h1>
                    <ul className="rect-additional-data">
                        <li className='rect-date'><a href="#">{publicationDate}</a></li>
                        <li className='rect-author'><a href="#">{authorName}</a></li>
                    </ul>
                </header>
                <img className="rect-image" src={image} alt="article image"/>
                <div className='rect-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    {/* Add additional paragraphs as needed */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className='rect-author-container'>
                    <img className="rect-author-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s" alt="Author"/>
                    <div className="rect-author-details">
                        <p className="rect-author-name">
                            Author:  <Link to={`/authors/${authorName}`}>{authorName}</Link>
                        </p>
                        <p className="rect-publication-date">
                            Published On: {publicationDate}
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Article;
