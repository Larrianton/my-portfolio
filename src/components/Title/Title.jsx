import style from "./Title.module.scss"
import React from "react";


export const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}