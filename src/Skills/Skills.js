import styleContainer from "../common/styles/Container.module.css"
import style from "./Skills.module.scss"
import React from "react";
import {Skill} from "./Skill/Skill";
import reduxImg from "../common/icons/redux-logo.svg"
import reactImg from "../common/icons/react-logo.svg"
import jsImg from "../common/icons/js-logo.svg"
import htmlImg from "../common/icons/html5-logo.svg"
import cssImg from "../common/icons/css3-logo.svg"
import tsImg from "../common/icons/ts-logo.svg"
import {Title} from "../components/Title/Title";

export const Skills = () => {
   let reduxLogo = {
        backgroundImage: `url(${reduxImg})`,
    };
   let reactLogo = {
        backgroundImage: `url(${reactImg})`,
        backgroundColor:'#111318'

    };
    let jsLogo = {
        backgroundImage: `url(${jsImg})`,
    };
    let htmlLogo = {
        backgroundImage: `url(${htmlImg})`,
    };
    let cssLogo = {
        backgroundImage: `url(${cssImg})`,
    };
    let tsLogo = {
        backgroundImage: `url(${tsImg})`,
        backgroundColor:'white'
    };


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML5"} description = {"Nam id volutpat lectus. Ut sit amet varius purus, non finibus justo. Nam malesuada elementum dui vitae auctor."} style={htmlLogo}/>
                    <Skill title={"CSS3"} description ={"Aliquam finibus porttitor tristique."} style={cssLogo} />
                    <Skill title={"JavaScript"} description ={"Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."} style={jsLogo}/>
                    <Skill title={"React"} description ={"Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."} style={reactLogo}/>
                    <Skill title={"Redux"} description ={"Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."} style={reduxLogo}/>
                    <Skill title={"TypeScript"} description ={"Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."} style={tsLogo}/>
                </div>
            </div>

        </div>

    );
}

