

// Lazy loading
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

let axios = require('axios');
window.axios = axios;

let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import * as bootstrap from 'bootstrap'

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// require('./components/ProductForm.js');

Shopify.formatMoney = function (cents, format) {
    if (typeof cents == 'string') {
        cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /{{\s*(\w+)\s*}}/;
    var formatString = (format || this.money_format);
    function defaultOption(opt, def) {
        return (typeof opt == 'undefined' ? def : opt);
    }
    function formatWithDelimiters(number, precision, thousands, decimal) {
        precision = defaultOption(precision, 2);
        thousands = defaultOption(thousands, ',');
        decimal = defaultOption(decimal, '.');
        if (isNaN(number) || number == null) {
            return 0;
        }
        number = (number / 100.0).toFixed(precision);
        var parts = number.split('.'),
            dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
            cents = parts[1] ? (decimal + parts[1]) : '';
        return dollars + cents;
    }
    switch (formatString.match(placeholderRegex)[1]) {
        case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;
        case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;
        case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, '.', ',');
            break;
    }
    return formatString.replace(placeholderRegex, value);
};

// javascript
require('./sections/header.js');
require('./sections/xite-featured-collection-products.js');
require('./sections/xite-featured-reviews.js');
require('./sections/xite-featured-banner.js');
require('./sections/xite-page-faqs.js');

require('./templates/collections.js');
require('./templates/product.js');
require('./snippets/xite-product-card.js');

