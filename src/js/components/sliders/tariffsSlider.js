import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function tariffsSlider () {
    const slider = new Swiper('.tariffs__content', {
        modules: [Mousewheel, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 12,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.tariffs__pagination',
          type: 'bullets',
        },
      });

}

export default tariffsSlider;