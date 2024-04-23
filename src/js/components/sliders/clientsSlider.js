import Swiper, {
    Navigation,
    Mousewheel,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';
  
import 'swiper/swiper.min.css';

function clientsSlider () {
    const slider = new Swiper('.clients__slider', {
        modules: [ Pagination, Autoplay, EffectFade, Navigation],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 20,
        watchOverflow: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.clients__pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.clients__slider_btn--next',
          prevEl: '.clients__slider_btn--prev',
        },
      });

}

export default clientsSlider;