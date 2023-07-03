import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from "./redux/reducers/userReducer";
import { profileReducer } from "./redux/reducers/profileReducer";

const rootReducer = combineReducers({
    userList : userReducer,
    openModal : profileReducer 
});

const initialState = {
    openModal:{
        open:false,
        user:{
            name:""
        }
    },
    userList:{
        loading: true,
        users:[]
    }
};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;