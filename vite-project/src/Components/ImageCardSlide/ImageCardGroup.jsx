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
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-03/pbd7.png?itok=PeavdzQz",
    category: "EML",
    description: "Pale Blue Dot Lecture",
    id: "1",
  },
  {
    image: "http://127.0.0.1:5173/src/assets/image.webp",
    category: "humour",
    description: "The Media club",
    id: "2",
  },
  {
    image:
      "https://lh3.googleusercontent.com/Mq1a_30iZK_YiEa5_hlPsEaHZ2YxqFfmBaxd2u5_zIIvNaqi54eM0vjdxsLl-aLL-pPV8PfAS9PBFoQicTkVMTAINktPxhJGBMYdNWZJfPf7SmJZshs0yAGW8B5YCwmSdw=w1280",
    category: "news",
    description: "The TFS Periodicals",
    id: "3",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-06/YOGA%20DAY.jpg?itok=j05Hfyiu",
    category: "yoga",
    description: "Yoga Day",
    id: "4",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-07/plant4mother%201.jpg?itok=ZF8vWRgd",
    category: "campaign",
    description: "Plant4 mother",
    id: "5",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-08/ug%20orientation.jpg?itok=julZJjBu",
    category: "Institute",
    description: "Artful Beginnings",
    id: "6",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-09/20240909_091335_0000.jpg?itok=2GAUnrV8",
    category: "workshop",
    description: "Clayforge",
    id: "7",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-08/Tech%20connect%20new.jpg?itok=FNRb7WUH",
    category: "industry",
    description: "Industry Leaders Meet",
    id: "8",
  },
  {
    image:
      "https://iitpkd.ac.in/sites/default/files/styles/rectangular_thumbnail/public/2024-08/IPD.jpg?itok=TDWspBol",
    category: "celeberation",
    description: "Independence Day",
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
