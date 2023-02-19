import React, { useState } from "react";
import "./qualification.css"
const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section"  id="qualifications">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">
                My personal journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Engineer</h3>
                                <span className="qualification__subtitle">Uvigo - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2012 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">FullStack Dev TF7 Arquitecture</h3>
                                <span className="qualification__subtitle">Viewnext - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">FullStack DEV Cloud Arquitecture</h3>
                                <span className="qualification__subtitle">Viewnext - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">NodeJS Dev</h3>
                                <span className="qualification__subtitle">Orienteed - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Java,JSF,MySQL </h3>
                                <span className="qualification__subtitle">ViewNext - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Javascript,Java</h3>
                                <span className="qualification__subtitle">ViewNext- Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React,NodeJS</h3>
                                <span className="qualification__subtitle">Orienteed- Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}

export default Qualifications