import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Autoplay, Navigation } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
function ImageCardGroup() {
  return (
    <div className="ImageCardGroupContainer">
      <div className="ImageCardGroupRow">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            834: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1440: {
              slidesPerView: 4,
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
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "70%" }}>
            <ImageCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageCardGroup;
