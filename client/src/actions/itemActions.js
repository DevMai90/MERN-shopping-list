// This is where we'll make our requests to the backend.
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';

// THIS IS AN ACTION CREATER. Creates action (object)
// Action creator gets called in our React Component
// Use dispatch for asynchronous requests. We can do this because of redux-thunk
// Thunks are functions that return a function
export const getItems = () => dispatch => {
  // Return to the reducer...
  dispatch(setItemsLoading());

  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
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

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
