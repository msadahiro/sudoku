import React, { Component } from 'react';

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        }
    }
    render() {
        return (
            <div>
                This is SUDOKI
            </div>
        )
    }
}
export default Sudoku;