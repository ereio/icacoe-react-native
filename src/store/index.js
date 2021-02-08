import {createStore, combineReducers} from 'redux';

import gameReducer from './game/reducer';
import boardReducer from './board/reducer';

const reducers = combineReducers({game: gameReducer, board: boardReducer});

const store = createStore(reducers);

export {store};
