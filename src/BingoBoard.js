import React from 'react';
import Cell from './Cell'
import "./App.css"
import "./boardProperties.css"

function BingoBoard(props) {
    return (
        <div>
            <h1>BINGO</h1>
            <section class="grid-1">
                {props.num1t ? <div class="item-1">{props.num1}</div>:<div class="item-2">{props.num1}</div>}
                {props.num2t ? <div class="item-1">{props.num2}</div>:<div class="item-2">{props.num2}</div>}
                {props.num3t ? <div class="item-1">{props.num3}</div>:<div class="item-2">{props.num3}</div>}
                {props.num4t ? <div class="item-1">{props.num4}</div>:<div class="item-2">{props.num4}</div>}
                {props.num5t ? <div class="item-1">{props.num5}</div>:<div class="item-2">{props.num5}</div>}
                {props.num6t ? <div class="item-1">{props.num6}</div>:<div class="item-2">{props.num6}</div>}
                {props.num7t ? <div class="item-1">{props.num7}</div>:<div class="item-2">{props.num7}</div>}
                {props.num8t ? <div class="item-1">{props.num8}</div>:<div class="item-2">{props.num8}</div>}
                {props.num9t ? <div class="item-1">{props.num9}</div>:<div class="item-2">{props.num9}</div>}
                {props.num10t ? <div class="item-1">{props.num10}</div>:<div class="item-2">{props.num10}</div>}
                {props.num11t ? <div class="item-1">{props.num11}</div>:<div class="item-2">{props.num11}</div>}
                {props.num12t ? <div class="item-1">{props.num12}</div>:<div class="item-2">{props.num12}</div>}
                {props.num13t ? <div class="item-1">{props.num13}</div>:<div class="item-2">{props.num13}</div>}
                {props.num14t ? <div class="item-1">{props.num14}</div>:<div class="item-2">{props.num14}</div>}
                {props.num15t ? <div class="item-1">{props.num15}</div>:<div class="item-2">{props.num15}</div>}
                {props.num16t ? <div class="item-1">{props.num16}</div>:<div class="item-2">{props.num16}</div>}
                {props.num17t ? <div class="item-1">{props.num17}</div>:<div class="item-2">{props.num17}</div>}
                {props.num18t ? <div class="item-1">{props.num18}</div>:<div class="item-2">{props.num18}</div>}
                {props.num19t ? <div class="item-1">{props.num19}</div>:<div class="item-2">{props.num19}</div>}
                {props.num20t ? <div class="item-1">{props.num20}</div>:<div class="item-2">{props.num20}</div>}
                {props.num21t ? <div class="item-1">{props.num21}</div>:<div class="item-2">{props.num21}</div>}
                {props.num22t ? <div class="item-1">{props.num22}</div>:<div class="item-2">{props.num22}</div>}
                {props.num23t ? <div class="item-1">{props.num23}</div>:<div class="item-2">{props.num23}</div>}
                {props.num24t ? <div class="item-1">{props.num24}</div>:<div class="item-2">{props.num24}</div>}
                {props.num25t ? <div class="item-1">{props.num25}</div>:<div class="item-2">{props.num25}</div>}
                </section>
            </div>
    );
}

export default BingoBoard;