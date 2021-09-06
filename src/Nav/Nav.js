import style from "./Nav.module.css"
import React from "react";

export const  Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Works</a>
            <a href="">Contacts</a>

        </div>
    );
}

