import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

var HeaderSection = function() {

    // objet
    var _ = this;

    // element
    // ---

    // init
    this.init = function() {
        console.log('Header: init');
        _.initHeader()
        _.initMobileHeader()
    } 

    this.initHeader = function(){

        const header = document.querySelector(".xite-header");
        const headerOffset = header.offsetTop;
      
        function makeHeaderSticky() {
          if (window.pageYOffset > headerOffset) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
      
        window.addEventListener("scroll", makeHeaderSticky);

    }

    this.initMobileHeader = function(){

        $(document).on('click', '.toggle-mobile-menu', function(){
            $('.mobile-menu, .mobile-menu__wrapper').toggleClass('show')
            $('body').toggleClass('mobile-menu-open')
        })

        // or pass an array with HTMLElements
        const accordions = Array.from(document.querySelectorAll('.xite-header .accordion-container'));
        console.log(accordions)
        new Accordion(accordions, {});

    }

    // ---

    // init
    this.init();

}

let headerSection = new HeaderSection();
