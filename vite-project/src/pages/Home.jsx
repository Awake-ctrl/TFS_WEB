// import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ImageCardGroup from "../Components/ImageCardSlide/ImageCardGroup";

import ArticleCards from '../Components/Article/ArticleCards'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import Footer from '../Components/Footer/Footer'
import FeedbackForm from "../Components/sidebar/subscriptionform2";
import '../Components/sidebar/sidebar.css'



const Home = () => {

  const start = "/assets/publicArticles/";
  const articles = [
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
    {
      heading: "",
      authorName: "Author",
      publicationDate: "",
      text: "",
      image: start+"",
    },
  ];


  return (
    <div>
      <Navbar />
      <ImageCardGroup />
      
      <div className="content">
        <div className="wrapper">
        <div className="wrapper2">
    
          
          <div className="article">
          {articles.map((article, index) => (
              <ArticleCards
                key={index}
                heading={article.heading}
                authorName={article.authorName}
                publicationDate={article.publicationDate}
                text={article.text}
                image={article.image}
                disabled={article.disabled}
              />
        ))}
          </div> 
          
          <aside>
            <Recentposts/>
            <br></br>
            <FeedbackForm/>
            <br></br>
            <Heading_and_line />
            <br></br>
            <Socials/>
          </aside>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home
