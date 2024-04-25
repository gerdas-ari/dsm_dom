import Swiper, {
    Navigation,
    Scrollbar,
    Mousewheel,
    Pagination,
    EffectFade,
    Autoplay,
    Virtual,
    Keyboard
  } from 'swiper';


  
import 'swiper/swiper.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';

function fullGallerySlider () {

    let sliderFullGallery = new Swiper('.slider_gallery', {
        modules: [ Navigation, Mousewheel, Virtual, Keyboard, Pagination],
        slidesPerView: 1,
        centeredSlides: true,
        speed: 700,
        spaceBetween: 20,
        watchOverflow: true,
        centeredSlides: true,
        virtual: {
            cache: false,
            renderSlide: function (slide) {
                return '<div class="swiper-slide"><img class="slider_gallery__img" src="' + slide + '"/></div>'
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        mousewheelControl: true,
        freeModeMinimumVelocity: 0.02,
        mousewheelReleaseOnEdges: false,
        mousewheel: {
            enabled: true,
            forceToAxis: true
        },
        // navigation: {
        //     nextEl: '.slider_gallery__next',
        //     prevEl: '.slider_gallery__prev',
        // },
        pagination: {
            el: '.slider_gallery__pagination',
            type: 'bullets',
        },

    });

    document.addEventListener('click', function (event) {
        var el = event.target.closest('[data-gallery-slides]');
        if (!el) return;
        var slides = JSON.parse(el.dataset.gallerySlides);

        if (!slides) {
            return
        }

        sliderFullGallery.virtual.slides = [];
        sliderFullGallery.update();
        sliderFullGallery.virtual.slides = slides
        sliderFullGallery.slideTo(0, 0);
        sliderFullGallery.update();
        if (event.target.closest('[data-id]')) {
            sliderFullGallery.slideTo(+event.target.closest('[data-id]').dataset.id, 0);
        }

        
    });
    
}

export default fullGallerySlider;