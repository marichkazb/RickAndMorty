import { SET_NEW_CHARACTERS_LIST } from '../store/types';


const initialState = {
    nextPage: '',
    prevPage: '',
    charactersList: [], 
    pages: 0
} 

// Use the initialState as a default value
export default function charactersReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case SET_NEW_CHARACTERS_LIST:
            const { payload: { nextPage, prevPage, pages, charactersList }} = action;
            return {...state, nextPage, prevPage, pages, charactersList}
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
