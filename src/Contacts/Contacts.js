import style from "./Contacts.module.scss"
import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMailBulk, faPhone} from "@fortawesome/free-solid-svg-icons";


export const Contacts = (props) => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <div className={style.contactInfo}>
                        <span><FontAwesomeIcon icon={faMailBulk} size={"1x"}/></span>
                    <p> Larrianton@gmail.com</p>
                            <br/>
                        <span><FontAwesomeIcon icon={faPhone} size={"1x"}/></span>
                        <p> +7-917-129-303</p>
                </div>
                <form className={style.contactsForm}>
                    <div className={style.contactsInput}>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <textarea className={style.contactsText}/>
                </form>
                <div className={style.contactsButton}>
                    <button>Send</button>
                </div>

            </div>

        </div>

    );
}

