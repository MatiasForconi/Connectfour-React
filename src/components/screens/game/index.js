import '.style.css';
import React from 'react';
import logo from '../../../assets/logo.svg'

function game () {
    return (
        <div class="wrapper">
        <div class="header"><a href="#">&larr; Back</a></div>
        <div class="game">
            <div id="board" class="board"></div>
            <div class="ribbon"></div>
            <div class="players">
                <div class="spot yellow"></div>
                <div class="player p1">You</div>
                <div class="direction left"></div>
                <div class="direction text">GO!</div>
                <div class="direction right"></div>
                <div class="player p2">AI (Easy)</div>
                <div class="spot red"></div>
            </div>
        </div>
        <div class="footer">
            <button class="fb">&#x1f44d; Like</button>
            <button class="embed">Embed</button>
        </div>
    </div>
    )
}

export default game