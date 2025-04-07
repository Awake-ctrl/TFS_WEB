import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
import { Circles } from "react-loader-spinner";

import Navbar from "../../components/Navbar/Navbar";
import ImageCardGroup from "../../components/ImageCardSlide/ImageCardGroup";
import ArticleCards from "../../components/Article/ArticleCards";
import Footer from "../../components/Footer/Footer";

import "../Authors/Author.css";

const Author = () => {
  const { author } = useParams();
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get("/db.json");
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles
    .filter((article) => article.author === author)
    .reverse();

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
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
              </div>
            ) : filteredArticles.length === 0 || author === "Anonymous" ? (
              <h2>
              <TypeAnimation
                sequence={"No articles found for this author."}
                speed={70}
                cursor={true}
                repeat={0}
                style={{ display: "inline-block" }}
              /></h2>
            ) : (
              filteredArticles.map((article) => (
                <ArticleCards key={article.id} {...article} />
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Author;
