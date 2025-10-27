
// import Swiper and modules styles
import $ from "jquery";

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

var CollectionProductsSection = function () { 

    // objet
    var _ = this;

    // element
    // ---

    // init
    this.init = function () {
        console.log('LP collectionProductsSection: init');
        _.collectionProductsSlider()
    }

    _.collectionProductsSlider = function () {

        // init Swiper:
        const swiperProductsSlider = new Swiper('.collection-products', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            spaceBetween: 16,
            slidesPerView: 1.2,
            loop: true,
            freeMode: false, 
            // pagination: {
            //     el: ".collection-products-pagination",
            //     clickable: true,
            // },
            navigation: {
                nextEl: ".collection-products-button-next",
                prevEl: ".collection-products-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.2,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    loop: false,
                },
            }
        });
    }

    // ---

    // init
    this.init();

}

let collectionProductsSection = new CollectionProductsSection();