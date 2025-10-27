
// import Swiper and modules styles
import $ from "jquery"; 

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

var ReviewsSection = function() {

    // objet
    var _ = this;

    // element
    // ---

    // init
    this.init = function() {
        console.log('LP ReviewsSection: init');
        _.initReviewsSlider()
    } 

    _.initReviewsSlider = function(){

        // init Swiper:
        const swiperReviewsSlider = new Swiper('.swiper-reviews', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            spaceBetween: 24,
            slidesPerView: '3',
            loop: true,
            freeMode: false,
            // pagination: {
            //     el: ".reviews-pagination",
            //     clickable: true,
            // },
            navigation: {
                nextEl: ".reviews-button-next",
                prevEl: ".reviews-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });

    }

    // ---

    // init
    this.init();

} 

let reviewsSection = new ReviewsSection();