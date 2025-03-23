import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './Article.css';

const Article = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get('/db.json');

                const articles = response.data;  // Assuming response data is an array
                const foundArticle = articles.find(a => a.id === parseInt(id)); // Find the correct article
                
                setArticle(foundArticle || null);
            } catch (error) {
                console.error("Error fetching the article:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!article) {
        return <p>Article not found.</p>;
    }

    const DateLink = `/Article/${id}#article-page-article-onset`;
    const AuthorLink = `/Authors/${article.author || "Unknown"}#author-page-author-onset`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { Name: name, Email: email, Comment: comment };

        try {
            await axios.post('ENTER LINK HERE', data);
            setName('');
            setEmail('');
            setComment('');
            setShowSuccessPopup(true); 
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const closePopup = () => setShowSuccessPopup(false);

    return (
        <div className="rect-art-card-full-container">
            <div className='rect-art-card-full-wrapper'>
                <header className='rect-art-card-header'>
                    <h1 className="rect-art-card-heading">{article.heading}</h1>
                    <ul className="rect-art-card-additional-data">
                        <li className='rect-art-card-date'>
                            <Link className="art-card-link-styles2" to={DateLink}>
                                {article.date || "Unknown Date"}
                            </Link>
                        </li>
                        <li className='rect-art-card-author'>
                            <Link className="art-card-link-styles2" to={AuthorLink}>
                                {article.author || "Anonymous"}
                            </Link>
                        </li>
                    </ul>
                </header>
                <img className="rect-art-card-image" 
                    src={article.imageurl} 
                    alt={article.heading} 
                />
                <div className='rect-art-card-text'>
                    <p>{article.description}</p>  
                </div>

                <div className='rect-author-container'>
                    <img className="rect-author-image" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s" 
                        alt="Author" 
                    />
                    <div className="rect-author-details">
                        <p className="rect-author-name">
                            Author:  
                            <Link className="art-card-link-styles2" to={AuthorLink}>
                                {article.author || "Anonymous"}
                            </Link>
                        </p>
                        <p className="rect-publication-date">
                            Published On:  
                            <Link className="art-card-link-styles2" to={DateLink}>
                                {article.date || "Unknown Date"}
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Comment Section */}
                <form className="rect-comment-section" onSubmit={handleSubmit}>
                    <h3 className="rect-comment-reply-title">Write a Comment</h3>
                    <textarea 
                        id="rect-comment" 
                        name="rect-comment" 
                        placeholder="* Comment" 
                        rows="8" 
                        className="rect-comment-textarea"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <div className="rect-comment-input-group">
                        <textarea 
                            id="rect-short-comment" 
                            name="rect-short-comment" 
                            placeholder="* Name" 
                            rows="2" 
                            className="rect-comment-input Name-area"
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                        <textarea 
                            id="rect-comment-email" 
                            name="rect-comment-email" 
                            placeholder="* E-mail" 
                            rows="2" 
                            className="rect-comment-input mail-area"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
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
