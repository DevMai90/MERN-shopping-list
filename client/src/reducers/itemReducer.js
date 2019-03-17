import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
import uuid from 'uuid';
// This is where our state will live.
// Will be accessible through the provider as item.items
// Will check our actions here

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Chicken' },
    { id: uuid(), name: 'Turkey' },
    { id: uuid(), name: 'Quail' }
  ]
};

// Need to evaluate action types.
// Takes in state as a parameter. Set it equal to initialState
// Remember that actions are objects
export default function(state = initialState, action) {
  // Use switch to evaluate action.type
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case ADD_ITEM:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state
      };
    default:
      return state;
  }
}
