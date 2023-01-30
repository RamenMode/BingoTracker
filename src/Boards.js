import React, {useState, useEffect} from 'react';
import './App.css';
import BingoBoard from './BingoBoard';
import { Navigate, useNavigate } from "react-router-dom";

function Boards(props) {
    const navigation = useNavigate();
    const [BingoArray, setBingoArray] = useState([])
    const [Input, setInput] = useState('');

    const handleChange = (event) => {
        // input value from "event"
        setInput(event.target.value);
      };
    //fix await document.getElementById. LIkely change to a form instead. 
    async function onPress(data) {
        let Spaceless = data.replace(/\s/g, '');
        let arrayBingo = Spaceless.split(',');
        setBingoArray(arrayBingo)
    }

    useEffect(() => console.log(BingoArray), [BingoArray])

    return (
        <div>
            <div className="App">
            <header className="App-header">
            <BingoBoard/>
            <h4>
                Track multiple sheets at the same time. Get started below.
            </h4>
            <p>Please enter your bingo sheet numbers from left to right, separated by commas starting with the first row ex. 1, 16, 37, 55, 75, 2, 24...</p>
            <label for="numbers">Numbers:</label>
            <input onChange={handleChange} type="text" id="numbers" name="numbers" placeholder="enter your board"></input>
            <p></p>
            <button className="custom-button blue" onClick={() => {onPress(Input)}}>Continue</button>
            </header>
            </div>
        </div>
    );
}

export default Boards;