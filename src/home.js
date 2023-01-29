import React from 'react';
import logo from './cooltext428473160330370_adobe_express_1.svg';
import './App.css';
import './Button.css'
import { useNavigate } from "react-router-dom";

function home(props) {

    function sayHello() {
        alert('You clicked me!');
    }
    return (
        <div>
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                An automatic tracker for your bingo sheets
            </p>
            <button className="custom-button blue" onClick={sayHello}>Continue</button>
            </header>
            </div>
        </div>
    );
}

export default home;