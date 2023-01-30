import React from 'react';
import Cell from './Cell'
import "./App.css"
import "./boardProperties.css"

function BingoBoard(props) {
    return (
        <div>
            <h1>BINGO</h1>
            <section class="grid-1">
                <div class="item-1">3</div>
                <div class="item-2">19</div>
                <div class="item-3">32</div>
                <div class="item-4">46</div>
                <div class="item-5">68</div>
                <div class="item-6">6</div>
                <div class="item-7">22</div>
                <div class="item-8">31</div>
                <div class="item-9">54</div>
                <div class="item-10">75</div>
                <div class="item-10">14</div>
                <div class="item-10">26</div>
                <div class="item-10">38</div>
                <div class="item-10">58</div>
                <div class="item-10">62</div>
                <div class="item-10">11</div>
                <div class="item-10">29</div>
                <div class="item-10">45</div>
                <div class="item-10">57</div>
                <div class="item-10">73</div>
                <div class="item-10">1</div>
                <div class="item-10">16</div>
                <div class="item-10">35</div>
                <div class="item-10">48</div>
                <div class="item-10">61</div>
                </section>
            </div>
    );
}

export default BingoBoard;