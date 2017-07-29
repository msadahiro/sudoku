import React from 'react';
import { render } from 'react-dom';
import Sudoku from './sudoku';

class App extends React.Component {
    render() {
        return (
            <div>
                <p> Hello React!</p>
                <Sudoku />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));