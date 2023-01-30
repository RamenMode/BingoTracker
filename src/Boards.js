import React from 'react';
import './App.css';
import BingoBoard from './BingoBoard';

function Boards(props) {
    return (
        <div>
            <div className="App">
            <header className="App-header">
            <BingoBoard/>
            <h4>
                Track multiple sheets at the same time. Get started below.
            </h4>
            <p>Please enter your bingo sheet numbers from left to right, separated by commas starting with the first row ex. 1, 16, 37, 55, 75, 2, 24...</p>
            <label for="Name">Numbers:</label>
            <input type="text" id="Name" name="Name" placeholder="enter your board"></input>
            <p></p>
            <button>Create a New Sheet +</button>
            </header>
            </div>
        </div>
    );
}

export default Boards;