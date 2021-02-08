import {ADD_MOVE} from './actions';
import initialState from './state';

export default function boardReducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_MOVE: {
      const player = action.player;
      const position = action.position;
      const board = state.player.map((spot, index) =>
        index === position ? player : spot,
      );
      return {
        ...state,
        board: board,
      };
    }
    default:
      return state;
  }
}
