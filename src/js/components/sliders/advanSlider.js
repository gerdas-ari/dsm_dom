import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade,
    FreeMode
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function advanSlider () {
    const slider = new Swiper('.advantages__slider', {
        modules: [Mousewheel, Pagination, Autoplay, EffectFade, FreeMode],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 30,
        watchOverflow: true,
        direction: 'vertical',
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        freeMode: {
          enabled: true
        },
      });

}

export default advanSlider;