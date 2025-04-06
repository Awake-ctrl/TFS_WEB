import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Autoplay, Navigation } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

function ImageCardGroup() {
  const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchArticle = async () => {
          try {
              const response = await axios.get('/db.json');

              const articles = response.data;  // Assuming response data is an array
              
              setArticles(articles);
          } catch (error) {
              console.error("Error fetching the article:", error);
          }
      };

      fetchArticle();
  }, []);

  return (
    <div className="ImageCardGroupContainer">
      <div className="ImageCardGroupRow">
        <Swiper
          loop={true}
          spaceBetween={"20px"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10, // Gap between slides at small screens
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15, // Slightly larger gap for mobile landscape
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20, // Maintain reasonable spacing for tablets
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25, // For small laptops
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30, // For larger desktops
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            2560: {
              slidesPerView: 6,
              spaceBetween: 30, // Ultra-wide, max gap size
            },
          }}
          className="swiper"
        >
          <div className="swiper-button-next">
            <MdNavigateNext className="next-icon" />
          </div>
          <div className="swiper-button-prev">
            <MdNavigateBefore className="prev-icon" />
          </div>
          {articles
          .filter((article) => article.slider === 1)
          .reverse()
          .map((card) => (
            <>
              <SwiperSlide style={{ width: "296.5px" }} key={card.id}>
                <ImageCard {...card} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ImageCardGroup;
