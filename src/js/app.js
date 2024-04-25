import LazyLoad from "vanilla-lazyload";
import LocomotiveScroll from 'locomotive-scroll';
import InputPhone from "./components/inputs/inputPhone";
import Input from "./components/inputs/input";
import validationMessages from "./components/inputs/validationMessages";
import IMask from "imask";
import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";
import ModalDispatcher from "./components/modalDispatcher";
import formSubmit from "./components/form";
import homeTabsSlider from "./components/sliders/homeTabsSlider";
import techSlider from "./components/sliders/techSlider";
import HvrSlider from "./components/sliders/HvrSlider";
import Dropdown from "./components/dropdown";
import servicesToggle from "./components/servicesToggle";
import statsCounter from "./components/statsCounter";
import advanSlider from "./components/sliders/advanSlider";
import clientsSlider from "./components/sliders/clientsSlider";
import projectInfoDropdown from "./components/projectInfoDropdown";
import genInfoSlider from "./components/sliders/genInfoSlider";
import tab from "./components/tab";
import materialsSlider from "./components/sliders/materialsSlider";
import tariffsSlider from "./components/sliders/tariffsSlider";
import fullGallerySlider from "./components/sliders/fullGallerySlider";


setTimeout(() => { 
    document.querySelector('body').classList.add('on-loaded');
}, 1000)

document.addEventListener("DOMContentLoaded", _ => {
    if (!sessionStorage.activeSession) {
        // setTimeout(_ => {
        //   document.querySelector('.preloader').classList.add('is-ready');
        //   sessionStorage.activeSession = 1;
        // }, 1000)
        
        setTimeout(() => {
            document.querySelector('body').classList.add('disabled');
            // sessionStorage.setItem('site', 'enter');
        }, 1000)
        
        sessionStorage.activeSession = 1;
    } else {
        document.querySelector('body').classList.add('disabled');
    }

    formSubmit();
    ModalDispatcher.init();

    servicesToggle();
    advanSlider();
    clientsSlider();
    genInfoSlider();
    fullGallerySlider();

    projectInfoDropdown();

    if (window.matchMedia("(max-width:500px)").matches) {
        techSlider();
        tariffsSlider();
        

        const homeBlocks = document.querySelectorAll('.home');
        homeBlocks.forEach(block => {
            homeTabsSlider();
        })

        const materialsBlocks = document.querySelectorAll('.materials__inner');
        materialsBlocks.forEach(block => {
            materialsSlider();
        })
    }

    if (document.querySelector('[data-tab-wrapper]')) {
        tab(document.querySelector('[data-tab-wrapper]'));
    }


    if (document.querySelector('[data-hover-images=""]')) {
        new HvrSlider('[data-hover-images=""]')
    }

    document.querySelectorAll('[data-dropdown]').forEach(el => {
        new Dropdown(el);
    })

    let scroll = new LocomotiveScroll({ 
        getDirection: true,
    });
    
    const lazyLoadInstance = new LazyLoad({
        elements_selector: '[data-lazy]'
    });

    setTimeout( _ => {
        scroll.update();


        scroll.on('scroll', (args) => {
        if (args.scroll.y > 100) {
            document.body.dataset.scrollDirection = args.direction;
        }
        else {
            document.body.dataset.scrollDirection = '';
        }
        });
        
        scroll.on('call', func => {
            statsCounter();
        })  
    }, 0)

    // PRIVACY
    
    if (document.querySelector('.privacy')) {
        let containers = document.querySelectorAll('[data-sector]');
        let links = document.querySelectorAll('.privacy_pagination__link');
        let anchorLinks = document.querySelectorAll('[data-anchor-link]');
      
        function intersectionHandler(entries) {
            [].forEach.call(entries, function(entry) {
                let sector = entry.target.dataset.sector;
                let link = [].find.call(links, link =>  link.getAttribute('href').replace('#', '') === sector);
                if (entry.isIntersecting) {
                    link.classList.add('is-active');
                }
                else {
                    link.classList.remove('is-active');
                }
      
            });
        }
      
        let observerSector = new IntersectionObserver(intersectionHandler, {  threshold: .1, rootMargin: '-20% 0% -50%'});
        [].forEach.call(containers, function(entry) {
            observerSector.observe(entry);
        });
      
        [].forEach.call(anchorLinks, function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
      
                const sector = link.getAttribute('href').replace('#', '');
                const pos = document.querySelector(`[data-sector="${sector}"]`).offsetTop;
                window.scrollTo(0, pos);
            });
        });
      
      }
      
    // ANCHOR LINKS

    const anchorLinks = document.querySelectorAll('[data-anchor]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault();
            const target = document.querySelector(`[data-scroll-id=${link.dataset.anchor}]`);
            scroll.scrollTo(target);
        });
    });

    // INPUTS

    const inputs = document.querySelectorAll('.input_wrapper__input');


    document.querySelectorAll('[name="phone"]').forEach((el) => {
        new InputPhone(el);
    });

    inputs.forEach(item => {
        new Input(item, validationMessages);
    })

});