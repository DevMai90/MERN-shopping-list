// This is where we'll make our requests to the backend.
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';

// THIS IS AN ACTION CREATER. Creates action (object)
// Action creator gets called in our React Component
// Use dispatch for asynchronous requests. We can do this because of redux-thunk
// Thunks are functions that return a function
export const getItems = () => dispatch => {
  // Return to the reducer...
  // loading is set to true before we make the request.
  // Will change back to false when we make the request and get the item back
  dispatch(setItemsLoading());

  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

// Must send id as a payload to the item reducer
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
