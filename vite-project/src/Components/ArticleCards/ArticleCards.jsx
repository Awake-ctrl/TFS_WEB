// import React from "react";
// import './ArticleCards.css'

const ArticleCards = () => {
    return (
        <div>
        <div className="rect-full-container">
            <div className='rect-full-wrapper'>
                <img className="rect-image" src="https://www.t5eiitm.org/wp-content/uploads/2024/08/Signature-look-of-superiority.png?w=1080&ssl=1" alt="image" />  
                <ul className="rect-additional-data">
                        <li className='rect-date'><a href="#">24th August, 2024</a></li>
                        <li className='rect-author'><a href="#">Simeon K.</a></li>
                </ul>
                <header className='rect-header'>
                    <h1 className="rect-heading">Freshie&apos;s Guide to RG: Do&apos;s, Don&apos;ts, and Common Mistakes</h1>
                    
                </header>
                
                <div className='rect-text'>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero expedita id nisi ullam, nihil animi veritatis suscipit at officiis obcaecati dolores velit consequuntur eum, tenetur fugiat similique iure reiciendis.
                    </p>  
                </div>
            </div>
        </div>
        </div>
    );
}

export default ArticleCards;
