import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade,
    FreeMode
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function genInfoSlider () {
    const slider = new Swiper('.general_info_slider', {
        modules: [Mousewheel, Pagination, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.general_info_slider__pagination',
          type: 'bullets',
        },
      });

}

export default genInfoSlider;