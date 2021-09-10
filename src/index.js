import $ from "jquery";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "./styles/index.scss";

const hello = (name) => {
    console.log(`Hello ${name}.`);
}

hello('Michael');

$(".box").hide().show(2000);