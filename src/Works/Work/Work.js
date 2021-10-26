import style from "./Work.module.scss"
import React from "react";

export const Work = (props) => {
    return (
        <div className={style.workBlock}>
            <div style={props.style} className={style.workImage}><a>View</a></div>
            <h3>{props.title}</h3>
            <div className={style.workDescription}>
                {props.description}
            </div>
        </div>

    );
}

