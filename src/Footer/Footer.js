import style from "./Footer.module.scss"
import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import {faTelegram, faViber, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <div className={style.footerWrapper}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <span>Larionov Antoniy</span>
            <div className={style.footerSocialNetworks}>
                <div style={{color:'#25d366'}}><FontAwesomeIcon icon={faWhatsapp} size={"2x"}/></div>
                <div style={{color:'#0088cc'}}><FontAwesomeIcon icon={faTelegram} size={"2x"}/></div>
                <div style={{color:'#59267c'}}><FontAwesomeIcon icon={faViber} size={"2x"}/></div>
            </div>
            <span>© All rights reserved</span>
        </div>
        </div>
    );
}

