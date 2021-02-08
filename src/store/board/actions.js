import {checkWinning, togglePlayerTurn} from '../game/actions';

export const ADD_PLAYER_MOVE = 'ADD_PLAYER_MOVE';
export const RESET_BOARD = 'RESET_BOARD';

export const addPlayerMove = (position) => (dispatch, getState) => {
  const {currentPlayer} = getState().game;

  dispatch({type: ADD_PLAYER_MOVE, position, player: currentPlayer});
  dispatch(checkWinning());

  const {winner} = getState().game;
  if (!winner) {
    dispatch(togglePlayerTurn());
  }
};
