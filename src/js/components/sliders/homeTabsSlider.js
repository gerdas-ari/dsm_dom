import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function homeTabsSlider () {
    const slider = new Swiper('.home_slider', {
        modules: [ Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 20,
        watchOverflow: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.home_slider__pagination',
          type: 'bullets',
        },
      });

}

export default homeTabsSlider;