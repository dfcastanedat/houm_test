import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import persistState from "redux-localstorage";

const composeEnhacers = composeWithDevTools({
    trace: true,
});

const initialState = getInitialState();


function getInitialState() {
    return {
        savedItems: [],
    };
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                savedItems: [...state.savedItems, action.item],
            }
        default:
            return state;
    }
}

const store = createStore(
    searchReducer,
    composeEnhacers(applyMiddleware(thunk), persistState())
);

export default store;
