import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types';
// This is where our state will live.
// Will be accessible through the provider as item.items
// Will check our actions here

const initialState = {
  items: [],
  loading: false
};

// Need to evaluate action types.
// Takes in state as a parameter. Set it equal to initialState
// Remember that actions are objects
export default function(state = initialState, action) {
  // Use switch to evaluate action.type
  switch (action.type) {
    case GET_ITEMS:
      return {
        // Change loading back to false after we've made our request and get our action.payload back
        ...state,
        items: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
