// import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.webp"
import './ArticleCard.css'

const Article = () => {
    const heading = "Freshie's Guide to RG: Do's, Don'ts, and Common Mistakes";
    const authorName = "Saikiran"; 
    const publicationDate = "24th August, 2024"; 

    const DateLink = "/Article";
    const AuthorLink = `/Authors/${authorName}`;

    // const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    return (
        <div className="art-card-full-container">
            <div className='art-card-full-wrapper'>

                <header className='art-card-header' >
                    <h1 className="art-card-heading" style={{fontSize:"1.75em"}}>{heading}</h1>
                    <ul className="rect-additional-data">
                        <li className='art-card-date'><Link className={linkstyles2} to={DateLink}>{publicationDate}</Link></li>
                        <li className='art-card-author'><Link className={linkstyles2} to={AuthorLink}>{authorName}</Link></li>
                    </ul>
                </header>
                <img className="art-card-image" src={image} alt="article image"/>
                <div className='art-card-text' style={{fontSize:"1.15em"}}>
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
                <div className="comment-section">
                    <h3 id="reply-title" className="comment-reply-title">Write a Comment</h3>

                    <textarea 
                        id="comment" 
                        name="comment" 
                        placeholder="* Comment" 
                        rows="8" 
                        aria-required="true" 
                        className="comment-textarea"
                    ></textarea>

          
                    {/* Container for Name and Email fields */}
                    <div className="comment-input-group">
                        <textarea 
                        id="short-comment" 
                        name="short-comment" 
                        placeholder="* Name" 
                        rows="2" 
                        className="comment-input Name-area"
                        aria-required="true"
                        ></textarea>

                        <textarea 
                        id="comment-email" 
                        name="comment-email" 
                        placeholder="* E-mail" 
                        rows="2" 
                        className="comment-input mail-area"
                        aria-required="true"
                        ></textarea>
                    </div>

                    
                    <button className="comment-submit-btn">Submit</button>
                </div>
            </div>   
        </div>
    );
}

export default Article;
