import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import minesweeperReducer from './src/reducers/minesweeperReducer'

const initialWidth = 16;
const initialHeight = 16;
const initialMines = 40;




export const store = getMinesweeperStore({ width: initialWidth, height: initialHeight, mineCount: initialMines });



// create a redux store with using minesweeper reducer and an initial state generated from passed options
export function getMinesweeperStore({ width, height, mineCount }) {
  const initialState = {
    width, height, mineCount,
    minesPlaced: false,
    lost: false,
    won: false,
    startTime: null, // starts when the first cell is clicked
    endTime: null, // set when won/lost
    grid: range(0, height).map((y) => range(0, width).map((x) => { // create a 2d grid of cells
      return {
        id: `cell-${x}-${y}`,
        x, y,
        flagged: false,
        mine: false,
        revealed: false
      };
    }))
  };
  return Redux.createStore((state = initialState, action = {}) => minesweeperReducer(state, action));
}


ReactDOM.render(<App />, document.querySelector(".outlet"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
