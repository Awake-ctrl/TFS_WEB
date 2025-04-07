import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Autoplay, Navigation } from "swiper/modules";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function ImageCardGroup() {
  const [articles, setArticles] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get("/db.json");
        const articles = response.data;
        setArticles(articles);
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };
    fetchArticle();
  }, []);

  const sliderArticles = articles
    .filter((article) => article.slider === 1)
    .reverse();

  return (
    <div className="ImageCardGroupContainer">
      <div className="ImageCardGroupRow">
        <div className="swiper-button-prev">
          <MdNavigateBefore className="prev-icon" />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.start(); // ✅ Make autoplay start immediately
          }}
          loop={true}
          loopAdditionalSlides={3}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={500}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            1280: { slidesPerView: 3, spaceBetween: 25 },
            1440: { slidesPerView: 4, spaceBetween: 30 },
            1920: { slidesPerView: 5, spaceBetween: 30 },
            2560: { slidesPerView: 6, spaceBetween: 30 },
          }}
          className="swiper"
        >
          {sliderArticles.map((card) => (
            <SwiperSlide key={card.id || `slide-${card.title}-${Math.random()}`}>
              <ImageCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next">
          <MdNavigateNext className="next-icon" />
        </div>
      </div>
    </div>
  );
}

export default ImageCardGroup;
