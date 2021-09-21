import styleContainer from "../common/styles/Container.module.css"
import style from "./Works.module.css"
import React from "react";
import {Work} from "./Work/Work"

export const Works = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2>My Works</h2>
                <div className={style.works}>
                    <Work title={"ToDoList"}
                          description={"Nam id volutpat lectus. Ut sit amet varius purus, non finibus justo. Nam malesuada elementum dui vitae auctor."}/>
                    <Work title={"Social Network"} description={"Aliquam finibus porttitor tristique."}/>
                    <Work title={"Counter"}
                          description={"Aliquam finibus porttitor tristique.Nam id volutpat lectus.Nam id volutpat lectus."}/>
                    <Work title={"Work In Progress"}
                          description={"Aliquam finibus porttitor tristique.Nam id volutpat lectus.Nam id volutpat lectus."}/>
                </div>
            </div>

        </div>

    );
}

