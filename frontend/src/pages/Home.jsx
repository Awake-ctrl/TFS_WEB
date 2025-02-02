// import React from "react";
import { Navbar, Footer, Heading_and_line, Recentposts, FeedbackForm, Socials } from './All_imports';
import { ArticleCards, ImageCardGroup } from './All_imports'

import '../components/Sidebar/sidebar.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/articles?populate=*');
        // console.log(response)
        setArticles(response.data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);


  return (
    <div>
      <div id="home-page-onset"></div>
      <Navbar />
      <ImageCardGroup />

      <div className="content">
        <div className="wrapper">
          <div className="wrapper2">
          <div className="article">
              {articles && articles.length > 0 ? (
                articles
                .filter((article) => article.category === "home") // Filter by category
                .map((article) => (
                  <ArticleCards
                    key={article.id}
                    id={article.id}
                    heading={article.heading}
                    author={article.author}
                    date={article.date}
                    description={article.description}
                    image={article.image?.url}
                    disabled={article.disabled}
                    category={article.category}
                  />
                ))
              ) : (
                <p>No articles available.</p> // Fallback message
              )}
            </div>

            <aside>
              <Recentposts />
              <br></br>
              <FeedbackForm />
              <br></br>
              <Heading_and_line 
               heading={"Archives"}
              />
              <br></br>
              <Heading_and_line 
                heading={"Contact Us"}
              />
              <br></br>
              <Socials />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
