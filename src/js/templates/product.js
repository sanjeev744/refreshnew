
// import Swiper and modules styles
import $ from "jquery";

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import 'jquery.simple-scroll-follow';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

var SingleProduct = function (sel) {

    // objet
    var _ = this;
    _.Shopify = window.Shopify 

    // element
    // ---

    // init
    this.init = function () {
        console.log('Single Product: init');
        _.initProductDetails()
        _.initGlobalReviews()
        _.initFAQs()
        _.relatedProductsMobileSlider()
        _.initGallery()
        Fancybox.bind()
        _.setupForm()
    }

    this.setupForm = () => {

        const form = document.querySelector('#product-form');
        form.addEventListener('change', onVariantChange.bind(this));
        const productInput = document.querySelector('[name=id]')

        function onVariantChange() {
            updateVariantStatuses();
            updatePrice();
            updateVariant();
        }

        function updateVariant() {
            const selectedVariant = getCurrentVariant();
            if (!selectedVariant) return;
            console.log('update variant', selectedVariant.id)
            console.log(productInput)
            productInput.value = selectedVariant.id;
        }

        function updateVariantStatuses() {
            const selectedVariant = getCurrentVariant();
            if (!selectedVariant) return;

            form.querySelector('.product-form__submit').disabled = !selectedVariant.available;
        }

        function updatePrice() {
            const selectedVariant = getCurrentVariant();
            if (!selectedVariant) return;

            const regularPriceEl = form.querySelector('[data-regular-price]');
            const salePriceEl = form.querySelector('[data-sale-price]');

            regularPriceEl.innerHTML = Shopify.formatMoney(selectedVariant.price, Shopify.money_format);

            if (salePriceEl) {
                salePriceEl.innerHTML = Shopify.formatMoney(selectedVariant.compare_at_price, Shopify.money_format);
            }
        }

        function getCurrentVariant() {
            const formData = new FormData(form);
            const selectedOptions = [];

            for (const [key, value] of formData.entries()) {
                if (key.startsWith('options[')) {
                    selectedOptions.push(value);
                }
            }

            return variants.find((variant) => variant.options.every((option, index) => option === selectedOptions[index]));
        }
    }

    this.initProductDetails = () => {
        // or pass an array with HTMLElements
        const accordions = Array.from(document.querySelectorAll('.product-details .accordion-container'));
        console.log(accordions)
        new Accordion(accordions, {});
    }

    this.initGallery = () => {

        // Main Gallery Swiper
        const mainGallery = new Swiper('.product-gallery-main', {
            modules: [Navigation, Pagination, EffectFade],
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: false,
            centeredSlides: true,
            effect: "fade",
            navigation: {
                nextEl: '.swiper-gallery-button-next',
                prevEl: '.swiper-gallery-button-prev',
            },
            breakpoints: {
                // Responsive settings
                320: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
            },
        });

        // Thumbnails Swiper
        const thumbsGallery = new Swiper('.product-gallery-thumbs', {
            modules: [Navigation, Pagination],
            spaceBetween: 10,
            slidesPerView: 5,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    slidesPerView: 5,
                },
            },
            controller: {
                control: mainGallery,
            },
        });

        // Add click event to thumbnail slides
        const thumbSlides = document.querySelectorAll('.product-gallery-thumbs .swiper-slide');
        thumbSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                mainGallery.slideTo(index);
                thumbsGallery.slideTo(index);
            });
        });

        mainGallery.on('slideChange', function(event) {
            // do something
            console.log(event)
            console.log(event.activeIndex)
            $('.product-gallery-thumbs .swiper-slide:eq('+event.activeIndex+')').trigger('click')
        });
        
        thumbsGallery.on('slideChange', function(event) {
            
        })

        $('.product-gallery-thumbs .swiper-slide').on('click', function(e){
            e.preventDefault()
            $('.product-gallery-thumbs .swiper-slide').removeClass('swiper-slide-active')
            $(this).addClass('swiper-slide-active')
        })

        $('.product-gallery').simpleScrollFollow({
            limit_elem: '#product-section',
            upper_side: '#shopify-section-header',
            min_width: 992 // Integer. Don't add "px".
        });

    }

    this.initFAQs = function () {

        // or pass an array with HTMLElements
        const accordions = Array.from(document.querySelectorAll('.faq-accordion-container'));
        console.log(accordions)
        const accordion = new Accordion(accordions, {
            openOnInit: [0],
        });
        // $('.xite-faqs-section').find('.ac-trigger:eq(0)').trigger('click')

    }

    this.initGlobalReviews = function () {

        $(document).on('click', '.global-reviews-button-prev', function (e) {
            e.preventDefault()
            $('.jdgm-carousel__left-arrow').trigger('click')
            console.log('click')
        })
        $(document).on('click', '.global-reviews-button-next', function (e) {
            e.preventDefault()
            $('.jdgm-carousel__right-arrow').trigger('click')
            console.log('click')
        })

    }

    _.relatedProductsMobileSlider = function () {

        // init Swiper:
        const swiperProductsMobileSlider = new Swiper('.related-products', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            spaceBetween: 16,
            slidesPerView: 1.2,
            loop: true,
            freeMode: false,
            // pagination: {
            //     el: ".related-products-pagination",
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
    if( $(sel).length ){
        console.log('SingleProduct init: ', sel)
        this.init();
    }

}

let singleProduct = new SingleProduct('body.template-product');
