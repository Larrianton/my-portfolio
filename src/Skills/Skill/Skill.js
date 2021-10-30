import style from "./Skill.module.scss"
import React from "react";

export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
        <div className={style.skillIcon} style={props.style}></div>
            <h3>{props.title}</h3>
            <div className={style.skillDescription}>
                {props.description}
            </div>
        </div>

    );
}

