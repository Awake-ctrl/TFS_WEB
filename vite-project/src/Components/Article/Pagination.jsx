// import React from "react";
import './ArticleCard.css'
// import image from "../../assets/image.webp"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const PaginatedItems = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
        
    const limit = 10; 

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
              const response = await axios.get(`/api/items?page=${currentPage}&limit=${limit}`);
              setItems(response.data.data);
              setTotalPages(response.data.totalPages);
            } catch (error) {
              console.error("Failed to fetch items:", error);
            } finally {
              setLoading(false);
            }
        };

        fetchItems();
      
    }, [currentPage]); // Fetch new items when currentPage changes
      
   
    const handleNextPage = () => {
        if (currentPage < totalPages) { // No next page when at last page 
            setCurrentPage((page) => page + 1);
        }
    };
   
    const handlePreviousPage = () => {
        if (currentPage > 1) { // No previous page when at first page
            setCurrentPage((page) => page - 1);
        }
    };
   
    const ArticleLink = "/Article";
    const AuthorLink = "/Authors/";
    const DateLink = "#";

    const linkstyles = "art-card-link-styles";
    const linkstyles2 = "art-card-link-styles2";

    return (
    <div className="art-card-full-container">
        {loading ? 
        (
           <p>Loading...</p>
        ) 
        : 
        (
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <Link className={linkstyles} to={ArticleLink}>
                            <div className='art-card-full-wrapper'>
                                <img className="art-card-image" src={item.image} alt="image" />  
                                <header className='art-card-header'>
                                    <ul className="art-card-additional-data">
                                            <li className='art-card-date'><Link className={linkstyles2} to={DateLink}>{item.publicationDate}</Link></li>
                                            <li className='art-card-author'><Link className={linkstyles2} to={AuthorLink+`${item.authorName}`}>{item.authorName}</Link></li>
                                    </ul>
                                    <h1 className="art-card-heading"><Link className={linkstyles} to={ArticleLink}>{item.heading}</Link></h1>
                                </header>
                                <div className='art-card-text'>
                                    <p>{item.text}</p>     
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
    
                <div className='pagination-footer'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                
                <span> Page {currentPage} of {totalPages} </span>
    
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>

            </div>
        )
        }
       
    </div>

   );
}

export default PaginatedItems;
