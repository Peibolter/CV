import React from "react";
import "./scrollup.css"
const ScrollUp = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollUp")
        //show scroll if higher than 560px
        if (this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    })

    return (

        <a href="#home" className="scrollUp">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp