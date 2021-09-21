import style from "./Work.module.css"
import React from "react";

export const Work = (props) => {
    return (
        <div className={style.workBlock}>
            <div className={style.workImage}><a>View</a></div>
            <h3>{props.title}</h3>
            <div className={style.workDescription}>
                {props.description}
            </div>
        </div>

    );
}

