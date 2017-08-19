import React, { Component } from 'react';


function startingPosition() {
    const array = [];
    const index1 = Math.floor(Math.random() * 3);
    const pos1 = Math.floor(Math.random() * 3);
    array.push(index1)
    array.push(pos1)
    return array;
}
// this function will check if a value is already in the board
function collision() {

}
class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
                [{ value: '' }, { value: '' }, { value: '' }],
                [{ value: '' }, { value: '' }, { value: '' }],
                [{ value: '' }, { value: '' }, { value: '' }],
            ]
        }
        this.placeBoard = this.placeBoard.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
    }
    generateBoard() {
        const board = this.state.grid;
        const startingValues = [1, 2, 3]
        let startLen = startingValues.length;
        for (let i = 0; i < startLen; i++) {
            const randomStart = startingPosition();
            if (!board[randomStart[0]][randomStart[1]].value) {
                board[randomStart[0]][randomStart[1]].value = startingValues[i];
            }
            else {
                i--;
            }
        }
        this.setState({
            grid: board
        })
    }
    placeBoard() {
        return (
            this.state.grid.map((row) => {
                return row.map((cell) => {
                    return <div style={{ width: "100px", height: "100px", border: "1px solid red", display: "inline-block" }} >{cell.value}</div>
                })
            })
        )
    }
    render() {
        return (
            <div>
                <h1>SUDOKU</h1>
                {this.placeBoard()}
                <button onClick={this.generateBoard}>Generate Sudoku board</button>
            </div>
        )
    }
}
export default Sudoku;