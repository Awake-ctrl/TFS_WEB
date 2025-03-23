import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageCardGroup from "../../components/ImageCardSlide/ImageCardGroup";
import ArticleCards from '../../components/Article/ArticleCards';
import Heading_and_line from '../../components/Sidebar/heading_and_line';
import Recentposts from "../../components/Sidebar/recentposts";
import Socials from "../../components/Sidebar/socials";
import Footer from '../../components/Footer/Footer';
import FeedbackForm from "../../components/Sidebar/subscriptionform";
import '../../components/Sidebar/sidebar.css';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Author = () => {
  const { author } = useParams(); 
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `http://localhost:1337/api/articles?filters[author][name][$eq]=${author}&populate=*`;
        const response = await axios.get(url);
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching the author related articles:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchArticles();
  }, [author]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (articles.length === 0) {
    return <p>No articles found for this author.</p>;
  }

  return (
    <div>
      <Navbar />
      <ImageCardGroup />
      <div className="article-page-author-name">
        <h1>Author: {author}</h1>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="wrapper2">
            <div className="article">
              <div id="author-page-author-onset"></div>
              {articles.map((article) => (
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
              ))}
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

export default Author;
