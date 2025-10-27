
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

var CollectionCardsSlider = function() {

    // objet
    var _ = this;

    // element
    // ---

    // init
    this.init = function() {
        console.log('collectionCardsSlider: init');
        _.collectionCardsSlider()
    } 

    _.collectionCardsSlider = function () { 

        // init Swiper:
        const swiperCollectionCardsSlider = new Swiper('.collection-cards', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: false,
            freeMode: true,
            navigation: {
                nextEl: ".cc-slider-button-next",
                prevEl: ".cc-slider-button-prev",
            },
            breakpoints: {
                // Responsive settings
                1024: {
                    spaceBetween: 20,
                    slidesPerView: 7,
                    freeMode: false,
                },
            }
        });
    }
    
    // ---

    // init
    this.init();

}

let collectionsSlider = new CollectionCardsSlider();
