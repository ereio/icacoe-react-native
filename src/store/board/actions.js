export const ADD_PLAYER_MOVE = 'ADD_PLAYER_MOVE';

export const addPlayerMove = ({position, player}) => (dispatch, getState) => {
  dispatch({type: ADD_PLAYER_MOVE, position, player});
};
