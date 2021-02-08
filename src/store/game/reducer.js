import {SET_CURRENT_PLAYER, TOGGLE_CURRENT_PLAYER} from './actions';
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
        currentPlayer: state.curentPlayer === 'X' ? 'O' : 'X',
      };
    }
    default:
      return state;
  }
}
