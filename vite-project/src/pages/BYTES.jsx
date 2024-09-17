// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ByteImage from '../Components/ByteImageSection/ByteImageSection'
import ArticleCards from '../Components/Article/ArticleCards'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from '../Components/sidebar/recentposts2'
import FeedbackForm from '../Components/sidebar/subscriptionform2'
import Socials from '../Components/sidebar/socials2'


const Bytes = () => {

  const start = "/assets/publicBytes/";
  const articles = [
    {
      heading: "Welcome to IIT PKD B22",
      authorName: "Author",
      publicationDate: "26th August, 2022",
      text: "Behold batch'22! Freshers arrive on campus for their first day at IIT Palakkad",
      image: start+"1_welctoiitpkd.png",
      disabled: false,
    },
    {
      heading: "TFS Freshers' Intro!",
      authorName: "Author",
      publicationDate: "29th August, 2022",
      text: "Introduced TFS to batch'22 during the club introduction session as part of the orientation programme 2022",
      image: start+"2_TFSintro.png",
    },
    {
      heading: "Tiny Fleeting Stories",
      authorName: "Author",
      publicationDate: "24th August, 2022",
      text: "TFS introduced our very own instagram news page 'Tiny Fleeting Stories'.",
      image: start+"3_tinyfleetingstories.png",
    },
    {
      heading: "Meet The Candidate",
      authorName: "Author",
      publicationDate: "23rd February, 2021",
      text: "The much awaited MTC where the SAC candidates present their manifestos and answer your questions!",
      image: start+"4_MTC.jpeg",
    },
    {
      heading: "Noor Jehan Open Grill Caught on Fire",
      authorName: "Author",
      publicationDate: "19th February, 2021",
      text: "Noor Jehan Open Grill restaurant, Palakkad, gutted in fire. No casualty reported. The restaurant was a favourite hangout place among IIT Palakkad students.",
      image: start+"5_NoorJehan.png",
    },
    {
      heading: "The first EML of the 2021",
      authorName: "Author",
      publicationDate: "11th February, 2021",
      text: "The first EML of the year by Mr.Arun Krishnamurthy, the founder of Environmental Foundation of India",
      image: start+"6_EML.png",
    },
    {
      heading: "The Fifth Institute Day",
      authorName: "Author",
      publicationDate: "22nd January, 2021",
      text: "The 5th Institute Day of IIT Palakkad",
      image: start+"7_5thInstituteDay.png",
    },
    {
      heading: "Launch of Techin",
      authorName: "Author",
      publicationDate: "20th January, 2021",
      text: "Launch of TECHIN (Technology Innovation Foundation of IIT Palakkad)",
      image: start+"8_TechinLaunch.png",
    },
    {
      heading: "Bodyweight Burnout",
      authorName: "Author",
      publicationDate: "2nd January, 2021",
      text: "The Virtual General Championships begin with the Fitness challenges by the Fitness club",
      image: start+"9_BodyweightBurnout.png",
    },
  ];
  return (
    <div>
      <Navbar />
      <ByteImage />
      
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
  )
}

export default Bytes