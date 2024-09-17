// import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ImageCardGroup from "../Components/ImageCardSlide/ImageCardGroup";

import ArticleCards from "../Components/Article/ArticleCards";
import Heading_and_line from "../Components/sidebar/heading_and_line2";
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import Footer from "../Components/Footer/Footer";
import FeedbackForm from "../Components/sidebar/subscriptionform2";
import '../Components/sidebar/sidebar.css';
import { useEffect } from 'react';
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

  const start = "/assets/publicArticles/";
  const articles = [
    {
      heading: "SAC REVIEW 2023",
      authorName: "Author",
      publicationDate: "January 2024",
      image: "/assets/publicArticles/sac.png",
      category: "SAC",
      id: "1",
      text: "The SAC is an integral part of our institute as they represent the student community and work towards the betterment of the institute. That being said, as the student media body , it is our responsibility to review their work and and bring students opinions to light.                         A big shoutout to all the SAC members for their commendable job in the last term and we hope you would use this review as a positive catalyst for continuous improvement and future success.  ",
    },
    {
      heading: "PLACEMENT / INTERNSHIP SURVEY 2023 -2024",
      authorName: "Author",
      publicationDate: "October 2023",
      image: "/assets/publicArticles/placement.png",
      category: "SURVEY",
      id: "2",
      text: `
      As you guys know, the placement season has already started. As we embark upon this adventure, we understand that you might have some million questions in your head.
  
  What were the companies that came last year? 
  
  What should I do to get a good internship/job?
  
   Are POR's /CGPA important?  
  
  We hope this report will answer all your doubts regarding the internship/placement journey, and make your task a little less daunting
      `,
    },
    {
      heading: "TFS FRESHERS GUIDE 2023",
      authorName: "Author",
      publicationDate: "August 2023",
      image: "/assets/publicArticles/iit.png",
      category: "FRESHERS",
      id: "3",
      text: `TFS is back with a bang!! An Exclusive for the Freshers!
  
  Moving out of your home to a new environment is a difficult task. In such a situation, your wisest option would be to explore and get to know the resources that you have. IITPKD offers its students almost every essential campus resource that they would need. The challenge is to be aware of them and utilise them. Hopefully, this article helps make the task a little less daunting. `, // Add text content here
    },
    {
      heading: "TFS Periodicals",
      authorName: "Author",
      publicationDate: "May 2022",
      image: "/assets/publicArticles/FleetStreet.png",
      category: "EML",
      id: "4",
      text: `Presenting a new series, The TFS Periodicals! The aim is to give access to an uncluttered space (as opposed to one's mail inbox) to catch up on institute activities and read transcribed interviews with eminent personalities within the institute (and eventually, outside as well).`,
    },
    {
      heading: "Perspective Part 3",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/perspective3.png",
      category: "EML",
      id: "5",
      text: `Continuation of the guest article series by Mr. Rachit Shah.
  Multi work series`,
    },
    {
      heading: "Perspective Part 2",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/perspective2.png",
      category: "EML",
      id: "6",
      text: `Continuation of the guest article series by Mr. Rachit Shah.
  Multi work series`,
    },
    {
      heading: "Exodus Part 2",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/exodus2.png",
      category: "EML",
      id: "7",
      text: `Interview of Akshansh Gupta, an Alumnus of IIT Palakkad and a Sr analyst at Cognizant.
  Multi work series`,
    },
    {
      heading: "Perspective Part 1",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/perspective1.png",
      category: "EML",
      id: "8",
      text: `Continuation of the guest article series by Mr. Rachit Shah.
  Multi work series`,
    },
    {
      heading: "Exodus Part 1",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/exodus1.png",
      category: "EML",
      id: "9",
      text: `Interview of Akshansh Gupta, an Alumnus of IIT Palakkad and a Sr analyst at Cognizant.
  Multi work series`,
    },
    {
      heading: "Fedena Disclosure",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/fedena.jpeg",
      category: "EML",
      id: "10",
      text: `A brief look into the security loopholes in Fedena,which were eventually fixed`,
    },
    {
      heading: "Privacy Matters??",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/privacymatters.jpeg",
      category: "EML",
      id: "11",
      text: `A quick look into the recent Privacy Policy update from WhatsApp and why it's causing all the fuzz!`,
    },
    {
      heading: "A Message to the Student Community of IIT Palakkad",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/message.png",
      category: "EML",
      id: "12",
      text: `From the Gen Sec to the students - A short interview with the General Secretary`,
    },
    {
      heading: "Mother Tongue Instruction at IITs",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/mothertounge.png",
      category: "EML",
      id: "13",
      text: `As the new year begins and there is fresh hope for change, there is word of one interesting change in the works: the Ministry of Education is proposing to make IITs start teaching students in their mother tongues.
  
  As this news has gone unnoticed and remains largely unheard, Navaneeth M Nambiar tries to explain why this idea seems bizarre.`,
    },
    {
      heading: "Catalogue of Clubs",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/clubs.jpg",
      category: "EML",
      id: "14",
      text: `A concise catalogue of the student bodies of IIT Palakkad.`,
    },
    {
      heading: "NEP 2020",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/NEP.jpg",
      category: "EML",
      id: "15",
      text: `NEP 2020 took the nation by storm. What is it? How is it going to be implemented?`,
    },
    {
      heading: "The Covid Pause",
      authorName: "Author",
      publicationDate: "",
      image: "/assets/publicArticles/covid.jpg",
      category: "EML",
      id: "16",
      text: `Are the drawbacks in our Education System more or less apparent during the pandemic? `,
    },
  ];

  return (
    <div>
      <div id="home-page-onset"></div>
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
              <Recentposts />
              <br></br>
              <FeedbackForm />
              <br></br>
              <Heading_and_line />
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
