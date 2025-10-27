<p align="center">
  <a href="https://www.wearelucyd.com/">
    <img alt="Logo" src="https://www.wearelucyd.com/wp-content/uploads/2021/02/Lucyd_Logo.webp" height="40">
  </a>
</p>
 
<p align="center">
  <strong>Shopify starter theme for Lucyd projects</strong>
</p> 

## Requirements

Make sure all dependencies have been installed before moving on:

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli/)
- [Node.js](http://nodejs.org/) >= 16

## Setup

Run the following command on the root of the theme:
 
1. Run npm install command:
```sh 
npm install
```

2. Activate Webpack Watch to track changes on the scripts/styles files and compile.

```sh 
npx mix watch
```

## File Structure

Lucyd starter theme comes with the following file structure:

```sh

lucyd-theme-starter/			# → Root of the theme
├── assets/							# → Theme assets (compiled)
├── config/                    	# → Theme config
├── layout/                    	# → Theme layout
├── locales/                    	# → Theme locales
├── sections/                      # → Theme sections
├── snipppets/                   # → Theme snippets
├── templates/                 # → Theme templates
├── src/                    		# → Theme source assets (before compilation)
│   ├── fonts                     # → Theme fonts
│   ├── styles                    # → Theme styles
│   ├── scripts                   # → Theme javascript 
├── node_modules/         # → Folder of the required Node.js packages (never edit)
├── package.json             # → Node.js dependencies and scripts
└── templates/                 # → Folder for all the templates and parts of the site
```

## How to work with assets

Is very important when developing a theme to do maintainable code, this is why packing all the code in just one file (without using a compiler like Gulp or Webpack) is not acceptable. The starter theme uses **Laravel Mix** to compile SASS and JS so it's important to remember compile after you edit any file related, this can be done easily if you track your changes running `npm run watch` on the root of the theme.

All the pages in the website must have their own script and style file, let’s see the following example:

We have 2 pages in our website: Home and Shop; so our file structure should looks like:

```bash
themes/your-theme-name/           # → Root of the theme

├── src/                          # → Theme assets
│   ├── fonts                     # → Theme fonts
│   ├── styles                    # → Theme styles [sass files]
│   │   ├── components
│   │   │    └── *components styles*
│   │   ├── pages
│   │   │    ├── home.scss        # → Home styles
│   │   │    └── shop.scss        # → Shop styles
│   │   └── general.scss          # → [Optional] Theme general styles
│   └── scripts                   # → Theme javascript
│       ├── components
│       │    └── *components javascript*
│       └── pages
│            ├── home.js          # → Home javascript
│            └── shop.js          # → Shop javascript
```

Following that structure, all the JS files should be declared as classes and initialized inside the file. Let’s see the `home.js`  and `shop.js` example.

```jsx
// ---
// Home
import $ from "jquery";

var HomePage = function(){

    // object
    var _ = this;

    // view
    _.$page = $('[data-page="home"]');

    // init
    _.init = function () {
        console.log('init home.js')
    }

    if (_.$page.length) {
        _.init();
    }

};

// Initialize the page with a custom JS selector
var pageHome = new HomePage();
```

```jsx
// ---
// Shop
import $ from "jquery";

var ShopPage = function (sel) {
	// object
	var _ = this;

	// view
	_.$page = $(sel);

	// init
	this.init = function () {

  }
	// ---

	// only initialize the file if the page is loaded
	if (_.$page.length) {
		this.init();
	}
};

// Initialize the page with a custom JS selector
let pageShop = new ShopPage('.page-template-shop');
```

The use of classes inside the JS is mandatory to prevent code execution on other pages in the site, all the JS and CSS files will be compiled with **Laravel Mix** to create 4 new files used by the theme:

```bash
themes/your-theme-name/             # → Root of the theme
└── assets/                         # → Theme assets
    ├── frontend.css                # → Compiled frontend related styles
    └── frontend.js                 # → Compiled frontend related javascript
```

The most important thing to keep in mind is to keep modules/pages separated and this process should be repeated for each page and compiled after edit.

## Starter Guide

You can read more about in our guideline https://www.notion.so/lucydmedia/Streamlining-Shopify-Theme-Development-Using-GitHub-1463cb84c38b800ba072dd108d561f3f?showMoveTo=true&saveParent=true"# refres-mix" 
"# refress-mix" 
"# refress-mix" 
"# refress-mix" 
"# refress-mix" 
