import { ADD_ONE_FILM, REMOVE_ONE_FILM } from '../store/types';

const initialState = {
    filmsCount: 1
}

// Use the initialState as a default value
export default function filmsReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case ADD_ONE_FILM:
            return {...state, filmsCount: state.filmsCount+1}
        case REMOVE_ONE_FILM:
            return {...state, filmsCount: state.filmsCount - 1}
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
