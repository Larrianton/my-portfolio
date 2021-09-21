import style from "./Contacts.module.css"
import React from "react";
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = (props) => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <div className={style.contactsForm}>
                    <form>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>
                </div>
                <div className={style.contactsFormButton}>
                    <button>Send</button>
                </div>
            </div>

        </div>

    );
}

