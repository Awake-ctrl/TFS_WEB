// import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.webp"
import './Article.css'

const Article = () => {
    const heading = "Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes";
    const authorName = "Saikiran"; 
    const publicationDate = "24th August, 2024"; 

    const DateLink = "/Article";
    const AuthorLink = `/Authors/${authorName}`;

    // const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    return (
        <div className="rect-art-card-full-container">
            <div className='rect-art-card-full-wrapper'>

                <header className='rect-art-card-header' >
                    <h1 className="rect-art-card-heading">{heading}</h1>
                    <ul className="rect-art-card-additional-data">
                        <li className='rect-art-card-date'><Link className={linkstyles2} to={DateLink}>{publicationDate}</Link></li>
                        <li className='rect-art-card-author'><Link className={linkstyles2} to={AuthorLink}>{authorName}</Link></li>
                    </ul>
                </header>
                <img className="rect-art-card-image" src={image} alt="article image"/>
                <div className='rect-art-card-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                </div>


                <div className='rect-author-container'>
                    <img className="rect-author-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s" alt="Author"/>
                    <div className="rect-author-details">
                        <p className="rect-author-name">
                            Author:  <Link className={linkstyles2} to={AuthorLink}>{authorName}</Link>
                        </p>
                        <p className="rect-publication-date">
                            Published On: <Link className={linkstyles2} to={DateLink}>{publicationDate}</Link>
                        </p>
                    </div>
                </div>
                <div className="rect-comment-section">
                    <h3 className="rect-comment-reply-title">Write a Comment</h3>

                    <textarea 
                        id="rect-comment" 
                        name="rect-comment" 
                        placeholder="* Comment" 
                        rows="8" 
                        aria-required="true" 
                        className="rect-comment-textarea"
                    ></textarea>

          
                    <div className="rect-comment-input-group">
                        <textarea 
                        id="rect-short-comment" 
                        name="rect-short-comment" 
                        placeholder="* Name" 
                        rows="2" 
                        className="rect-comment-input Name-area"
                        aria-required="true"
                        ></textarea>

                        <textarea 
                        id="rect-comment-email" 
                        name="rect-comment-email" 
                        placeholder="* E-mail" 
                        rows="2" 
                        className="rect-comment-input mail-area"
                        aria-required="true"
                        ></textarea>
                    </div>

                    
                    <button className="rect-comment-submit-btn">Submit</button>
                </div>
            </div>   
        </div>
    );
}

export default Article;
