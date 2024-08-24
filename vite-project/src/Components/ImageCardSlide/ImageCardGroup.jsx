import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Pagination, Navigation } from "swiper/modules";
function ImageCardGroup() {
  return (
    <div className="ImageCardGroupContainer">
      <div className="ImageCardGroupRow">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
          <SwiperSlide>
            <ImageCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageCardGroup;
/*

    <div className="ImageCardGroupContainer">
      <div className="ImageCardGroupRow">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>

*/
