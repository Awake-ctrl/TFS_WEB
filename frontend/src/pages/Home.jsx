import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer, Heading_and_line, Recentposts, FeedbackForm, Socials } from '../All_imports';
import { ArticleCards, ImageCardGroup } from '../All_imports';

import '../components/Sidebar/sidebar.css';

const Home = () => {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

    useEffect(() => {
      const fetchArticle = async () => {
          try {
              const response = await axios.get('/db.json');

              const articles = response.data;  // Assuming response data is an array
              console.log(articles);
              
              setArticles(articles);
          } catch (error) {
              console.error("Error fetching the article:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchArticle();
  }, []);

  if (loading) {
      return <p>Loading...</p>;
  }


  return (
    <div>
      <div id="home-page-onset"></div>
      <Navbar />
      <ImageCardGroup />

      <div className="content">
        <div className="wrapper">
          <div className="wrapper2">
            <div className="article">
              {articles
                .filter((article) => article.type === "article") // Filter by type
                .map((article) => (
                  <ArticleCards
                    key={article.id}
                    id={article.id}
                    heading={article.heading}
                    author={article.author || "Anonymous"}
                    date={article.date || "Unknown Date"}
                    description={article.description}
                    image={article.imageurl } // Fallback image
                    type={article.type}
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

export default Home;
