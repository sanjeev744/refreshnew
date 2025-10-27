
// import Swiper and modules styles
import $ from "jquery";

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

var XitePageFaqs = function (sel) {

    // objet
    var _ = this;
    _.Shopify = window.Shopify 

    // element
    // ---

    // init
    this.init = function () {
        _.initPageFAQs()
    }

    this.initPageFAQs = function () {

        // or pass an array with HTMLElements
        const accordions = Array.from(document.querySelectorAll('.xite-page-faqs-section .faq-accordion-container'));
        console.log(accordions)
        const accordion = new Accordion(accordions, {
            openOnInit: [0],
        });

    }

    // ---

    // init
    if( $(sel).length ){
        console.log('Xite Page FAQs init: ', sel)
        this.init();
    }

}

let xitePageFaqs = new XitePageFaqs('.xite-page-faqs-section');
