import React from "react";
import "./footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">Pablo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#qualifications" className="footer__link">Qualifications</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/pablo-gonzalez-rodriguez-1464a7150/" className="footer__social-link" target="_blank" rel="noreferrer"><i class="uil uil-linkedin"></i></a>

                    <a href="https://www.youtube.com/watch?v=5bId3N7QZec" className="footer__social-link" target="_blank"rel="noreferrer" ><i class="uil uil-dribbble"></i></a>

                    <a href="https://github.com/peibolter" className="footer__social-link" target="_blank" rel="noreferrer"><i class="uil uil-github-alt"></i></a>
                </div>

                <span className="footer__copy">
                    &#169; This web is open source.
                </span>
            </div>
        </footer>
    )
}

export default Footer