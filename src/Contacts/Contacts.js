import style from "./Contacts.module.css"
import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../components/Title/Title";

export const Contacts = (props) => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <div className={style.contactInfo}>
                    <p></p>
                    <p>12321</p>
                    <p>12312</p>
                </div>
                <form className={style.contactsForm}>
                    <div className={style.contactsInput}>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <textarea className={style.contactsText}/>
                </form>
                <div className={style.contactsFormButton}>
                    <button>Send</button>
                </div>
            </div>

        </div>

    );
}

