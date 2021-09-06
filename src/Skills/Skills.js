import styleContainer from "../common/styles/Container.module.css"
import style from "./Skills.module.css"
import React from "react";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description = {"Nam id volutpat lectus. Ut sit amet varius purus, non finibus justo. Nam malesuada elementum dui vitae auctor."}/>
                    <Skill title={"CSS"} description ={"Aliquam finibus porttitor tristique."} />
                    <Skill title={"JS"} description ={"Vestibulum nulla lorem, sollicitudin eget tellus id, interdum imperdiet leo."}/>
                </div>
            </div>

        </div>

    );
}

