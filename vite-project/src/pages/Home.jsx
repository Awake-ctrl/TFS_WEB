import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Article from '../Components/Article/Article'
import '../Components/Sidebar/sidebar.css'
import Heading_and_line from '../Components/Sidebar/heading_and_line2'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='Main'>
      <Navbar />
      <div className="content">
        <div className="article">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
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