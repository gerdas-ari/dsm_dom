import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function materialsSlider () {
    const slider = new Swiper('.materials__inner', {
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
          el: '.materials__pagination',
          type: 'bullets',
        },
      });

}

export default materialsSlider;