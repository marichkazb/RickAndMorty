import { SET_NEW_LOCATIONS_LIST } from '../store/types';


const initialState = {
  nextPage: '',
  prevPage: '',
  locationsList: [],
  pages: 0
}

export default function locationsReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case SET_NEW_LOCATIONS_LIST:
      const { payload: { nextPage, prevPage, pages, locationsList }} = action;
      return {...state, nextPage, prevPage, pages, locationsList}
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
