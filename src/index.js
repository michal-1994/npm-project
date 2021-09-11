import $ from "jquery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import "./styles/index.scss";

$("#owl-example").owlCarousel({
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        960:{
            items:3
        },
        1240:{
            items:4
        }
    },
    dots: false,
    nav: true,
    navContainer: false
});