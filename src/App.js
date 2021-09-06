import './App.css';
import {Header} from "./Header/Header";
import React from "react";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>

        </div>
    );
}
export default App
