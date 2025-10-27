
// import Swiper and modules styles
import $ from "jquery"; 
// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

var FeaturedBannerSection = function() {

    // objet
    var _ = this;

    // element
    // ---

    // init
    this.init = function() {
        console.log('LP FeaturedBannerSection: init');
        _.initFeaturedBanner()
    } 

    _.initFeaturedBanner = function(){
        Fancybox.bind()
    }

    // ---

    // init
    this.init();

} 

let featuredBannerSection = new FeaturedBannerSection();