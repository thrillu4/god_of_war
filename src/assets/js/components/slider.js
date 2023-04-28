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