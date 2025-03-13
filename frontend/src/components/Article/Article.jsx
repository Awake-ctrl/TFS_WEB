// import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './Article.css'

const Article = () => {
    
    const { id } = useParams() // Get the article ID from the URL
    const [article, setArticle] = useState(null); // State to hold the article data
    const [loading, setLoading] = useState(true); // Loading state
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [comment,setComment]=useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const url = `/db.json`
                const response = await axios.get(url);
                console.log(response.data.data)
                setArticle(response.data.data[0]);
            } catch (error) {
                console.error("Error fetching the article:", error);
            } finally {
                setLoading(false); 
            }
        };


        fetchArticle(id);
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!article) {
        return <p>Article not found.</p>;
    }

    // const { heading, author, date, description, image } = article.attributes;

    
    const img_start_url = "http://localhost:1337"
    const ArticleOnsetCSSID = "article-page-article-onset";
    const DateLink = `/Article/${id}#${ArticleOnsetCSSID}`;

    const AuthorOnsetCSSID = "author-page-author-onset";
    const AuthorLink = `/Authors/${article.author}#${AuthorOnsetCSSID}`;

    // const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,email,feedback);
        const data={
          Name:name,
          Email:email,
          Comment:comment
        }
        axios.post('ENTER LINK HERE',data).then((response)=>{
          console.log(response);
          setName('');
          setEmail('');
          setComment('');
          setShowSuccessPopup(true); // Show popup after success
        }).catch((error) => {
          console.error('Error submitting feedback:', error);
        });
      };
    
      const closePopup = () => {
        setShowSuccessPopup(false); // Close the popup
      };

    return (
        <div className="rect-art-card-full-container">
            <div className='rect-art-card-full-wrapper'>

                <header className='rect-art-card-header' >
                    <h1 className="rect-art-card-heading">{article.heading}</h1>
                    <ul className="rect-art-card-additional-data">
                        <li className='rect-art-card-date'><Link className={linkstyles2} to={DateLink}>{article.date}</Link></li>
                        <li className='rect-art-card-author'><Link className={linkstyles2} to={AuthorLink}>{article.author}</Link></li>
                    </ul>
                </header>
                <img className="rect-art-card-image" src={`${img_start_url}${article.image.url}`} alt="article image"/>
                <div className='rect-art-card-text'>
                  <p>{article.description}</p>  
                </div>


                <div className='rect-author-container'>
                    <img className="rect-author-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s" alt="Author"/>
                    <div className="rect-author-details">
                        <p className="rect-author-name">
                            Author:  <Link className={linkstyles2} to={AuthorLink}>{article.author}</Link>
                        </p>
                        <p className="rect-publication-date">
                            Published On: <Link className={linkstyles2} to={DateLink}>{article.date}</Link>
                        </p>
                    </div>
                </div>
                <form className="rect-comment-section" onSubmit={handleSubmit}>
                    <h3 className="rect-comment-reply-title">Write a Comment</h3>

                    <textarea 
                        id="rect-comment" 
                        name="rect-comment" 
                        placeholder="* Comment" 
                        rows="8" 
                        aria-required="true" 
                        className="rect-comment-textarea"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                        required
                    ></textarea>`

          
                    <div className="rect-comment-input-group">
                        <textarea 
                        id="rect-short-comment" 
                        name="rect-short-comment" 
                        placeholder="* Name" 
                        rows="2" 
                        className="rect-comment-input Name-area"
                        aria-required="true"
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} 
                        required
                        ></textarea>

                        <textarea 
                        id="rect-comment-email" 
                        name="rect-comment-email" 
                        placeholder="* E-mail" 
                        rows="2" 
                        className="rect-comment-input mail-area"
                        aria-required="true"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        required
                        ></textarea>
                    </div>

                    
                    <input className="rect-comment-submit-btn" type="submit"/>
                </form>
                {/* Success Popup Modal */}
                {showSuccessPopup && (
                <div className="popup">
                    <div className="popup-inner">
                    <h3>Comment sent</h3>
                    <p>Thank you for your comment.</p>
                    <button className="popup-close" onClick={closePopup}>OK</button>
                    </div>
                </div>
      )}
            </div>   
        </div>
    );
}

export default Article;
