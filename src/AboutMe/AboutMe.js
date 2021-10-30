import style from "../AboutMe/AboutMe.module.scss";
import React from "react";
import {Title} from "../components/Title/Title";
import styleContainer from "../common/styles/Container.module.css";

export const AboutMe = () => {
    return (
        <div className={style.aboutMeBlock}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
            <Title title ={"About me"}/>
            <div className={style.aboutMeDescr}>
                "Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."
                "Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."
                "Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."
                "Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."
            </div>
        </div>
        </div>

    );
}