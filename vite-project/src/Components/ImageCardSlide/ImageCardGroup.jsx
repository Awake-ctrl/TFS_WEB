import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Autoplay, Navigation } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "1",
  },
  {
    image: "http://127.0.0.1:5173/src/assets/image.webp",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "humour",
    description: "Freshie Guide to Side Hustles in Institute",
    id: "9",
  },
];
function ImageCardGroup() {
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
          {cardData.map((card) => (
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
