// import Swiper bundle with all modules installed
import Swiper from "swiper";

import "/src/css/style.css";
// import styles bundle
import "swiper/css";
import "swiper/css/pagination";
import "./fss.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

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
