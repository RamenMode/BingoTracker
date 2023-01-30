import React from 'react';
import logo from './cooltext428473160330370_adobe_express_1.svg';
import './App.css';
import './Button.css'
import { Navigate, useNavigate } from "react-router-dom";

function Home(props) {
    const navigation = useNavigate();
    function handleClick(navigate) {
        
        navigate('/Boards')

    }
    return (
        <div>
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                An automatic tracker for your bingo sheets
            </p>
            <button className="custom-button blue" onClick={() => {handleClick(navigation)}}>Continue</button>
            </header>
            </div>
        </div>
    );
}

export default Home;