import React from "react";
import { Link } from "react-router-dom";
import './Article.css'

const Article = () => {
    const authorName = "Saikiran";  // Define the author name
    const publicationDate = "24th August, 2024";  // Define the publication date

    return (
        <div className="rect-full-container">
            <div className='rect-full-wrapper'>
                <header className='rect-header'>
                    <h1 className="rect-heading">Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes</h1>
                    <ul className="rect-additional-data">
                        <li className='rect-date'><a href="#">{publicationDate}</a></li>
                        <li className='rect-author'><a href="#">{authorName}</a></li>
                    </ul>
                </header>
                <img 
                    className="rect-image" 
                    src="https://www.t5eiitm.org/wp-content/uploads/2024/08/Signature-look-of-superiority.png?w=1080&ssl=1" 
                    alt="article visual"
                />
                <div className='rect-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    {/* Add additional paragraphs as needed */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className='author-container'>
                <img
                    className="author-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s"
                    alt="Author"
                />
                <div className="author-details">
                    <p className="author-name">
                        <Link to={`/authors/${authorName}`}>{authorName}</Link>
                    </p>
                
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Article;
