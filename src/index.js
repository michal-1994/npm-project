import "./styles/index.scss";
import $ from "jquery";

const hello = (name) => {
    console.log(`Hello ${name}.`);
}

hello('Michael');

$(".box").hide().show(2000);