import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function techSlider () {
    const slider = new Swiper('.technologies__slider', {
        modules: [Mousewheel, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 20,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.technologies__pagination',
          type: 'bullets',
        },
      });

}

export default techSlider;