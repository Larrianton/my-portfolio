import style from "./Header.module.css"
import React from "react";
import {Nav} from "../Nav/Nav";

export const  Header = () => {
    return (
        <div className={style.header}>
        <Nav/>

        </div>
    );
}

