// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Article from '../Components/Article/Article'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import SubscriptionForm from "../Components/sidebar/subscriptionform2";
import Footer from '../Components/Footer/Footer'
import '../Components/sidebar/sidebar.css'



const ArticlePage = () => {
  return (
    <div className='Main'>
      <Navbar />


      <div className="content">
        <div className='wrapper'>
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


      <Footer />
    </div>
  )
}

export default ArticlePage