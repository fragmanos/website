import React from 'react';
import Square from './Square'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill('. .'),
            xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    renderSquare(i) {
        return (<Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <tbody>
                    <tr>
                        <td>{this.renderSquare(0)}</td>
                        <td>{this.renderSquare(1)}</td>
                        <td>{this.renderSquare(2)}</td>
                    </tr>
                    <tr>
                        <td>{this.renderSquare(3)}</td>
                        <td>{this.renderSquare(4)}</td>
                        <td>{this.renderSquare(5)}</td>
                    </tr>
                    <tr>
                        <td>{this.renderSquare(6)}</td>
                        <td>{this.renderSquare(7)}</td>
                        <td>{this.renderSquare(8)}</td>
                    </tr>
                </tbody>
            </div>
        );
    }

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;  