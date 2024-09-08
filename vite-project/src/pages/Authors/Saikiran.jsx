// import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ArticleCards from '../../Components/Article/ArticleCards'
import Heading_and_line from '../../Components/Sidebar/heading_and_line2'
import Footer from '../../Components/Footer/Footer'
import './Complete.css'



const ArticlePage = () => {
  return (
    <div className='Main'>
      <Navbar />


      <div className="content">
        <div className='wrapper'>
          <div className="article">
            <ArticleCards/>
            <ArticleCards/>
          </div> 
          <aside>
            <Heading_and_line />
          </aside>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default ArticlePage;