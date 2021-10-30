import styleContainer from "../common/styles/Container.module.css"
import style from "./Works.module.scss"
import React from "react";
import {Work} from "./Work/Work"
import weatherApp from '../common/images/weatherApp.png'
import todolist from '../common/images/todolist.png'
import counter from '../common/images/counter.png'
import socialNetwork from '../common/images/socialNetwork.png'
import {Title} from "../components/Title/Title";

export const Works = () => {
    const weatherImg = {
        backgroundImage: `url(${weatherApp})`,
    };
    const todolistImg = {
        backgroundImage: `url(${todolist})`,
    };
    const counterImg = {
        backgroundImage: `url(${counter})`,
    };
    const socialImg = {
        backgroundImage: `url(${socialNetwork})`,
    };

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My works'}/>
                <div className={style.works}>
                    <Work title={"ToDoList"}
                          style={todolistImg}
                          description={"Nam id volutpat lectus. Ut sit amet varius purus, non finibus justo. Nam malesuada elementum dui vitae auctor."}/>
                    <Work title={"Social Network"}
                          style={socialImg}
                          description={"Aliquam finibus porttitor tristique."}/>
                    <Work title={"Counter"}
                          style={counterImg}
                          description={"Aliquam finibus porttitor tristique.Nam id volutpat lectus.Nam id volutpat lectus."}/>
                    <Work title={"Weather"}
                          style={weatherImg}
                          description={"Aliquam finibus porttitor tristique.Nam id volutpat lectus.Nam id volutpat lectus."}/>

                </div>
            </div>

        </div>

    );
}

