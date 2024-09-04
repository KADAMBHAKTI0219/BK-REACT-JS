import { combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer} from "./CounterRedux/reducer";
import { reducer as ThemeReducer} from "./ThemeRedux/reducer";

const rootReducer = combineReducers({CounterReducer,ThemeReducer})
export const store = legacy_createStore(rootReducer)