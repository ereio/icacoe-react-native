import {ADD_PLAYER_MOVE} from './actions';
import initialState from './state';

export default function boardReducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_PLAYER_MOVE: {
      const player = action.player;
      const position = action.position;
      const positions = state.positions.map((p, index) =>
        index === position ? player : p,
      );
      return {
        ...state,
        positions: positions,
      };
    }
    default:
      return state;
  }
}
