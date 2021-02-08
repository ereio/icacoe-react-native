import {
  RESET_GAME,
  SET_CURRENT_PLAYER,
  SET_WINNER,
  TOGGLE_CURRENT_PLAYER,
} from './actions';
import initialState from './state';

export default function gameReducer(state = initialState(), action) {
  switch (action.type) {
    case SET_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: action.currentPlayer === 'X' ? 'X' : 'O',
      };
    }
    case TOGGLE_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }
    case SET_WINNER:
      return {
        ...state,
        winner: state.currentPlayer,
      };
    case RESET_GAME:
      return initialState();
    default:
      return state;
  }
}
