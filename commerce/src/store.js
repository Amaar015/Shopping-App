import { CreateStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducer({});
const initialState = {};
const midleware = [thunk];
const store = CreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware([...midleware]))
);

export default store;