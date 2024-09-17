import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./ImageCardGroup.css";
import { Autoplay, Navigation } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
const articles = [
  {
    heading: "SAC REVIEW 2023",
    authorName: "Author",
    publicationDate: "January 2024",
    image: "/assets/Home-articles/1_welctoiitpkd.png",
    category: "SAC",
    id: "1",
    text: "",
  },
  {
    heading: "PLACEMENT / INTERNSHIP SURVEY 2023 -2024",
    authorName: "Author",
    publicationDate: "October 2023",
    image: "",
    category: "SURVEY",
    id: "2",
    text: "",
  },
  {
    heading: "TFS FRESHERS GUIDE 2023",
    authorName: "Author",
    publicationDate: "August 2023",
    image: "", // Add image URL here
    category: "FRESHERS",
    id: "3",
    text: "", // Add text content here
  },
  {
    heading: "TFS Periodicals",
    authorName: "Author",
    publicationDate: "May 2022",
    image: "/CarouselArticleImages/FleetStreet.png",
    category: "EML",
    id: "4",
    text: "",
  },
  {
    heading: "Perspective Part 3",
    authorName: "Author",
    publicationDate: "",
    image: "",
    category: "EML",
    id: "5",
    text: "",
  },
  {
    heading: "Perspective Part 2",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/perspective2.png",
    category: "EML",
    id: "6",
    text: "",
  },
  {
    heading: "Exodus Part 2",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/exodus2.png",
    category: "EML",
    id: "7",
    text: "",
  },
  {
    heading: "Perspective Part 1",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/perspective1.png",
    category: "EML",
    id: "8",
    text: "",
  },
  {
    heading: "Exodus Part 1",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/exodus1.png",
    category: "EML",
    id: "9",
    text: "",
  },
  {
    heading: "Fedena Disclosure",
    authorName: "Author",
    publicationDate: "",
    image: "",
    category: "EML",
    id: "10",
    text: "",
  },
  {
    heading: "Privacy Matters??",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/privacymatters.jpeg",
    category: "EML",
    id: "11",
    text: "",
  },
  {
    heading: "A Message to the Student Community of IIT Palakkad",
    authorName: "Author",
    publicationDate: "",
    image: "",
    category: "EML",
    id: "12",
    text: "",
  },
  {
    heading: "Mother Tongue Instruction at IITs",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/mothertounge.png",
    category: "EML",
    id: "13",
    text: "",
  },
  {
    heading: "Catalogue of Clubs",
    authorName: "Author",
    publicationDate: "",
    image: "",
    category: "EML",
    id: "14",
    text: "",
  },
  {
    heading: "NEP 2020",
    authorName: "Author",
    publicationDate: "",
    image: "/CarouselArticleImages/NEP.jpg",
    category: "EML",
    id: "15",
    text: "",
  },
  {
    heading: "The Covid Pause",
    authorName: "Author",
    publicationDate: "",
    image: "",
    category: "EML",
    id: "16",
    text: "",
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
          {articles.map((card) => (
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
