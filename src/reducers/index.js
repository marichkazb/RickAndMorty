import {combineReducers} from 'redux';
import films from './fimls';
import charactersReducer from './characters';
import locationsReducer from "./locations";
import episodesReducer from "./episodes";

const rootReducer = combineReducers({
    films, charactersReducer, locationsReducer, episodesReducer
})

export default rootReducer
