import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

import Navbar from "../../components/Navbar/Navbar";
import ImageCardGroup from "../../components/ImageCardSlide/ImageCardGroup";
import ArticleCards from "../../components/Article/ArticleCards";
import Footer from "../../components/Footer/Footer";

import "../Authors/Author.css";

const Author = () => {
  const { author } = useParams();
  const location = useLocation();
  const [articles, setArticles] = useState([]);

  // Scroll to hash element on mount/update
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  // Fetch articles from db.json
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get("/db.json");
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles
    .filter((article) => article.author === author)
    .reverse();

  if (filteredArticles.length === 0 || author === "Anonymous") {
    return <p className="no-articles">No articles found for this author.</p>;
  }

  return (
    <div>
      <Navbar />
      <ImageCardGroup />

      <div className="article-page-author-name">
        <h1>
          Author:&nbsp;
          <TypeAnimation
            sequence={[author]}
            speed={70}
            cursor={true}
            repeat={0}
            style={{ display: "inline-block" }}
          />
        </h1>
        <br />
        <br />
      </div>

      <div className="author-content">
        <div className="author-wrapper">
          <div className="article" id="author-page-author-onset">
            {filteredArticles.map((article) => (
              <ArticleCards key={article.id} {...article} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Author;
