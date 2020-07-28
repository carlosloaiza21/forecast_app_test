import { loadState, saveState } from './localstorage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persisted = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const STORE = createStore(rootReducer,persisted,composeEnhancers(applyMiddleware(thunk)));

STORE.subscribe(()=>{
    saveState({
        searchReducer: STORE.getState().searchReducer
    })
})

export default STORE;