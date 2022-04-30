import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import updateErrorReducer from "./error/reducer";
import updateLoadingReducer from "./loading/reducer";
import updateToDoReducer from "./updateTodo/reducer";

const rootReducer = combineReducers({
    error : updateErrorReducer, 
    loading : updateLoadingReducer, 
    todos : updateToDoReducer
});

const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof(action) == "function")
    {
        return action(store.dispatch);
    }
    next(action);
}

const store = createStore(rootReducer, 
    compose(applyMiddleware(thunkMiddleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
