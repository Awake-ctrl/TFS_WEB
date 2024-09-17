// import React from "react";
import { Link } from "react-router-dom";
import image from "../../../public/assets/publicBytes/1_welctoiitpkd.png"
import './Article.css'

const Article = () => {
    
    const heading = "Welcome to IIT PKD B22";
    const authorName = "Author"; 
    const publicationDate = "26th October, 2022"; 
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quis sunt optio explicabo pariatur, atque voluptas dicta ducimus architecto ratione modi, aliquam expedita cumque consequatur harum iure, aliquid ipsam sint.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita impedit est dicta mollitia tempore. Impedit, quo! Aut quae porro saepe iusto illum non magni qui error consequatur, ipsam ex enim!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita impedit est dicta mollitia tempore. Impedit, quo! Aut quae porro saepe iusto illum non magni qui error consequatur, ipsam ex enim!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita impedit est dicta mollitia tempore. Impedit, quo! Aut quae porro saepe iusto illum non magni qui error consequatur, ipsam ex enim!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita impedit est dicta mollitia tempore. Impedit, quo! Aut quae porro saepe iusto illum non magni qui error consequatur, ipsam ex enim! Quasi doloribus deserunt numquam nobis ipsam corporis, corrupti aliquid consectetur odio ad blanditiis voluptatum, assumenda maiores temporibus necessitatibus. Iusto magni dolores rerum.";

    
    const ArticleOnsetCSSID = "article-page-article-onset";
    const DateLink = `/Article#${ArticleOnsetCSSID}`;

    const AuthorOnsetCSSID = "author-page-author-onset";
    const AuthorLink = `/Authors/${authorName}#${AuthorOnsetCSSID}`;

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
                  <p>{text}</p>  
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
                    ></textarea>`

          
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
