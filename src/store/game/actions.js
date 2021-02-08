export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const TOGGLE_CURRENT_PLAYER = 'TOGGLE_CURRENT_PLAYER';
export const SET_WINNER = 'SET_WINNER';
export const RESET_GAME = 'RESET_GAME';

export const togglePlayerTurn = () => (dispatch, getState) => {
  dispatch({type: TOGGLE_CURRENT_PLAYER});
};

export const setPlayerTurn = (currentPlayer) => (dispatch, getState) => {
  dispatch({type: SET_CURRENT_PLAYER, currentPlayer: currentPlayer});
};

export const checkWinning = () => (dispatch, getState) => {
  const {positions: b} = getState().board;
  let winningPlayer = '';

  const conditions = [
    b[0] + b[1] + b[2], // row
    b[3] + b[4] + b[5], // row
    b[6] + b[7] + b[8], // row
    b[0] + b[3] + b[6], // col
    b[1] + b[4] + b[7], // col
    b[2] + b[5] + b[8], // col
    b[0] + b[4] + b[8], // diag
    b[2] + b[4] + b[6], // diag
  ];

  // TODO: this stinks
  const hasWon = conditions.filter(
    (condition) =>
      condition.length === 3 &&
      (condition.match(/.*[X]{3}/) || condition.match(/.*[O]{3}/)),
  );

  if (hasWon.length) {
    winningPlayer = hasWon[0];
    dispatch({type: SET_WINNER, winningPlayer: winningPlayer});
  }
};
