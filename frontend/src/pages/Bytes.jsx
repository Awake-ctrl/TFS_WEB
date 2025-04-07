import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import {
  Navbar,
  Footer,
  Heading_and_line,
  Recentposts,
  FeedbackForm,
  Socials,
  ArticleCards,
  ImageCardGroup,
} from "../All_imports";

import "../components/Sidebar/sidebar.css";

const Home = () => {
  const location = useLocation();
  const [articles, setArticles] = useState([]);

  // Scroll to hash target on navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  // Fetch articles on load
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get("/db.json");
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const byteArticles = articles
    .filter((article) => article.type === "byte")
    .reverse();

  return (
    <div>
      <div id="home-page-onset"></div>
      <Navbar />
      <ImageCardGroup />

      <div className="content">
        <div className="wrapper">
          <div className="wrapper2">
            <div className="article">
              {byteArticles.map((article) => (
                <ArticleCards key={article.id} {...article} />
              ))}
            </div>

            <aside>
              <Recentposts />
              <br />
              <FeedbackForm />
              <br />
              <Heading_and_line heading="Archives" />
              <br />
              <Heading_and_line heading="Contact Us" />
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
