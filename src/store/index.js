import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './game/reducer';
import boardReducer from './board/reducer';

const reducers = combineReducers({game: gameReducer, board: boardReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export {store};
