import React, {useState, useEffect} from 'react';
import './App.css';
import BingoBoard from './BingoBoard';
import { Navigate, useNavigate } from "react-router-dom";

function Boards(props) {
    
    const navigation = useNavigate();
    const [BingoArray, setBingoArray] = useState([])
    const [BingoArrayTruth, setBingoArrayTruth] = useState([])
    const [Input, setInput] = useState('');
    const [CalledNumber, setCalledNumber] = useState('');
    var index = -1;

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleChange = (event) => {
        // input value from "event"
        setInput(event.target.value); 
    };
    
    const handleCalledNumber = (event) => {
        setCalledNumber(event.target.value); 
    };
    //fix await document.getElementById. LIkely change to a form instead. 
    async function onPress(data) {
        setInput("")
        let Spaceless = data.replace(/\s/g, '');
        let arrayBingo = Spaceless.split(',');
        setBingoArray([...BingoArray, arrayBingo])
        setBingoArrayTruth([...BingoArrayTruth, Array.apply(true, Array(25)).map(function () {return true})])
    }
    async function onPressCalled(data) {
        setCalledNumber("")
        let BingoArrayTruthTemp = BingoArrayTruth
        for (let i=0; i<BingoArray.length; i++) {
            for (let x=0; x<BingoArray[i].length; x++) {
                if (data == BingoArray[i][x]) {
                    BingoArrayTruthTemp[i][x] = false;
                }
            }
        }
        setBingoArrayTruth(BingoArrayTruthTemp)
    }

    useEffect(() => console.log(BingoArray), [BingoArray])

    return (
        <div>
            <div className="App">
            <header className="App-header">
            <BingoBoard
                num1 = {Math.floor((Math.random()*15)+1)}
                num2 = {Math.floor((Math.random()*15)+16)}
                num3 = {Math.floor((Math.random()*15)+31)}
                num4 = {Math.floor((Math.random()*15)+46)}
                num5 = {Math.floor((Math.random()*15)+61)}
                num6 = {Math.floor((Math.random()*15)+1)}
                num7 = {Math.floor((Math.random()*15)+16)}
                num8 = {Math.floor((Math.random()*15)+31)}
                num9 = {Math.floor((Math.random()*15)+46)}
                num10 = {Math.floor((Math.random()*15)+61)}
                num11 = {Math.floor((Math.random()*15)+1)}
                num12 = {Math.floor((Math.random()*15)+16)}
                num13 = {Math.floor((Math.random()*15)+31)}
                num14 = {Math.floor((Math.random()*15)+46)}
                num15 = {Math.floor((Math.random()*15)+61)}
                num16 = {Math.floor((Math.random()*15)+1)}
                num17 = {Math.floor((Math.random()*15)+16)}
                num18 = {Math.floor((Math.random()*15)+31)}
                num19 = {Math.floor((Math.random()*15)+46)}
                num20 = {Math.floor((Math.random()*15)+61)}
                num21 = {Math.floor((Math.random()*15)+1)}
                num22 = {Math.floor((Math.random()*15)+16)}
                num23 = {Math.floor((Math.random()*15)+31)}
                num24 = {Math.floor((Math.random()*15)+46)}
                num25 = {Math.floor((Math.random()*15)+61)}
            />
            <h4>
                Track multiple sheets at the same time. Get started below.
            </h4>
            <p>Please enter your bingo sheet numbers from left to right, separated by commas starting with the first row ex. 1, 16, 37, 55, 75, 2, 24...</p>
            <label for="numbers">Numbers:</label>
            <input value = {Input} onChange={handleChange} type="text" id="numbers" name="numbers" placeholder="enter your board"></input>
            <p></p>
            <button className="custom-button blue" onClick={() => {onPress(Input)}}>Continue</button>
            <p></p>
            <label for="called">Called number: </label>
            <input value = {CalledNumber} onChange = {handleCalledNumber} type = "text" id="called" name="called" placeholder="enter one number"></input>
            <p></p>
            <button className="custom-button blue" onClick={() => {onPressCalled(CalledNumber)}}>Continue</button>
            <p></p>
            <button onClick={forceUpdate}>Manually Update</button>
            {BingoArray.map((board) => {
                index = index + 1;
                return(
                    <BingoBoard
                        num1t = {BingoArrayTruth[index][0]}
                        num2t = {BingoArrayTruth[index][1]}
                        num3t = {BingoArrayTruth[index][2]}
                        num4t = {BingoArrayTruth[index][3]}
                        num5t = {BingoArrayTruth[index][4]}
                        num6t = {BingoArrayTruth[index][5]}
                        num7t = {BingoArrayTruth[index][6]}
                        num8t = {BingoArrayTruth[index][7]}
                        num9t = {BingoArrayTruth[index][8]}
                        num10t = {BingoArrayTruth[index][9]}
                        num11t = {BingoArrayTruth[index][10]}
                        num12t = {BingoArrayTruth[index][11]}
                        num13t = {BingoArrayTruth[index][12]}
                        num14t = {BingoArrayTruth[index][13]}
                        num15t = {BingoArrayTruth[index][14]}
                        num16t = {BingoArrayTruth[index][15]}
                        num17t = {BingoArrayTruth[index][16]}
                        num18t = {BingoArrayTruth[index][17]}
                        num19t = {BingoArrayTruth[index][18]}
                        num20t = {BingoArrayTruth[index][19]}
                        num21t = {BingoArrayTruth[index][20]}
                        num22t = {BingoArrayTruth[index][21]}
                        num23t = {BingoArrayTruth[index][22]}
                        num24t = {BingoArrayTruth[index][23]}
                        num25t = {BingoArrayTruth[index][24]}
                        num1 = {board[0]}
                        num2 = {board[1]}
                        num3 = {board[2]}
                        num4 = {board[3]}
                        num5 = {board[4]}
                        num6 = {board[5]}
                        num7 = {board[6]}
                        num8 = {board[7]}
                        num9 = {board[8]}
                        num10 = {board[9]}
                        num11 = {board[10]}
                        num12 = {board[11]}
                        num13 = {board[12]}
                        num14 = {board[13]}
                        num15 = {board[14]}
                        num16 = {board[15]}
                        num17 = {board[16]}
                        num18 = {board[17]}
                        num19 = {board[18]}
                        num20 = {board[19]}
                        num21 = {board[20]}
                        num22 = {board[21]}
                        num23 = {board[22]}
                        num24 = {board[23]}
                        num25 = {board[24]}
                    >
                    </BingoBoard>
                )
            })}
            </header>
            </div>
        </div>
    );
}

export default Boards;