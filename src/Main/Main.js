import styleContainer from "../common/styles/Container.module.css"
import style from "./Main.module.css"
import React from "react";

export const  Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                <span>Hi There</span>
                <h1>Im Larionov Antoniy</h1>
                <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

