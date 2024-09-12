// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Article from '../Components/Article/Article'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import SubscriptionForm from "../Components/sidebar/subscriptionform2";
import Footer from '../Components/Footer/Footer'
import ImageCardGroup from '../Components/ImageCardSlide/ImageCardGroup';
import '../Components/sidebar/sidebar.css'



const ArticlePage = () => {
  return (
    <div className='Main'>
      <Navbar />
      <ImageCardGroup />


      <div className="content">
      <div className="wrapper">
      <div className="wrapper2">
          <div className="article">
            <Article/>
          </div> 
          <aside>
            <Heading_and_line />
            <SubscriptionForm/>
            <Recentposts/>
            <Socials/>
          </aside>
        </div>
      </div>
      </div>


      <Footer />
    </div>
  )
}

export default ArticlePage