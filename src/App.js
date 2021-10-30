import './App.css';
import {Header} from "./Header/Header";
import React from "react";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./Works/Works"
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {AboutMe} from "./AboutMe/AboutMe";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
export default App
