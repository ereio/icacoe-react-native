import { ADD_PLAYER_MOVE, RESET_BOARD } from './actions';
import initialState from './state';

export default function boardReducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_PLAYER_MOVE: {
      const player = action.player;
      const position = action.position;
      const positions = state.positions.map((p, index) =>
        index === position ? player : p,
      );
      const full = state.positions.reduce((total, p, index) => {
        return p.length + total;
      }, 1);

      return {
        ...state,
        positions: positions,
        full: full === 9,
      };
    }
    case RESET_BOARD:
      return initialState();
    default:
      return state;
  }
}
