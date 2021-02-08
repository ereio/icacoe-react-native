export const TOGGLE_CURRENT_PLAYER = 'TOGGLE_CURRENT_PLAYER';

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';

export const togglePlayerTurn = () => (dispatch, getState) => {
  dispatch({type: TOGGLE_CURRENT_PLAYER});
};

export const setPlayerTurn = (currentPlayer) => (dispatch, getState) => {
  dispatch({type: SET_CURRENT_PLAYER, currentPlayer: currentPlayer});
};
