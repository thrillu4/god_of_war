import Swiper, { Navigation, Autoplay, EffectCoverflow, EffectCreative } from "swiper";
import "swiper/css";

export const swiper = () => {
    new Swiper(".swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 2,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 40,
            slideShadows: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 20,
              slideShadows: true,
          },
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        },
        autoplay: {
            delay: 4000,
            pauseOnMouseEnter: true
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Autoplay, EffectCoverflow],
    });
}