
import reducer from "../reducers/reducer"
import {legacy_createStore as createStore} from "redux";
export const store = createStore(reducer);