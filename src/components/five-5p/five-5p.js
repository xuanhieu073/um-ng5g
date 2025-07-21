import Swiper from "swiper";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./five-5p.css";

var swiper = new Swiper(".mySwiper", {
  modules: [EffectCoverflow, Pagination],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
