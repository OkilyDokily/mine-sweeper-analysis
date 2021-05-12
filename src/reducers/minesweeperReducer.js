import minesweeperActions from '../actions/minesweeperActions'

function minesweeperReducer(state, action) {
  if (minesweeperActions.hasOwnProperty(action.type)) { // checks if handler exists for the action
    return minesweeperActions[action.type](state, action);
  } else {
    console.warn(`Invalid minesweeper action: "${action.type}" (ignoring)`);
    return state;
  }
};


export default minesweeperReducer;