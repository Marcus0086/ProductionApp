import React, { Component }from 'react';
import ScriptTag from 'react-script-tag';
import './2048.css';

class Game extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="heading">
                        <h1 className="title">2048</h1>
                        <div className="score-container">0</div>
                    </div>

                    <div className="game-container">
                        <div className="game-message">
                            <p></p>
                            <div className="lower">
                                <a className="retry-button">retry</a>
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="grid-row">
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                            </div>
                            <div className="grid-row">
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                            </div>
                            <div className="grid-row">
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                            </div>
                            <div class="grid-row">
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                                <div className="grid-cell"></div>
                            </div>
                        </div>

                        <div className="tile-container">

                        </div>
                    </div>
                </div>
                <ScriptTag isHydrating={true} type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js' />
            </React.Fragment>
        );

    }
}

export default Game;

function GameManager(size, InputManager, Actuator) {
    this.size = size; // Size of the grid
    this.inputManager = new InputManager;
    this.actuator = new Actuator;

    this.startTiles = 2;

    this.inputManager.on("move", this.move.bind(this));
    this.inputManager.on("restart", this.restart.bind(this));

    this.setup();
}