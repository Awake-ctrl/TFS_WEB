// import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ArticleCards from '../Components/Article/ArticleCards'
import '../Components/Sidebar/sidebar.css'
import Heading_and_line from '../Components/Sidebar/heading_and_line2'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='Main'>
      <Navbar />
      <div className="content">
        <div className="article">
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
        </div> 

        <aside>
          <Heading_and_line />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Home