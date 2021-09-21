import style from "./Footer.module.css"
import React from "react";
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <span>Larionov Antoniy</span>
            <div className={style.footerSocialNetworks}>
                <div><a>TG</a></div>
                <div><a>VK</a></div>
                <div><a>Inst</a></div>
            </div>
            <span>© All rights reserved</span>
        </div>
    );
}

