// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ByteImage from '../Components/ByteImageSection/ByteImageSection'
import ArticleCards from '../Components/Article/ArticleCards'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from '../Components/sidebar/recentposts2'
import FeedbackForm from '../Components/sidebar/subscriptionform2'
import Socials from '../Components/sidebar/socials2'
import '../Components/sidebar/sidebar.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const News = () => {
  const category = "news";
  const location = useLocation();
  const [articles, setArticles] = useState([]);

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, [location]);

    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await axios.get(`http://localhost:1337/api/articles?filters[category][$eq]=${category}&populate=*`);
          setArticles(response.data.data);
        } catch (error) {
          console.error(`Error fetching ${category}:`, error);
        }
      };
      fetchArticles();
    }, []);

  return (
    <div>
      <div id="home-page-onset"></div>
      <Navbar />
      <ByteImage />

      <div className="content">
        <div className="wrapper">
          <div className="wrapper2">
            <div className="article">
              {articles && articles.length > 0 ? (
                articles.map((article) => (
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
                <p>No {category} available.</p>
              )}
            </div>

            <aside>
              <Recentposts />
              <br />
              <FeedbackForm />
              <br />
              <Heading_and_line heading={"Archives"} />
              <br />
              <Heading_and_line heading={"Contact Us"} />
              <br />
              <Socials />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default News