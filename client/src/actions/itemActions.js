import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';
// This is where we'll make our requests to the backend.

// THIS IS AN ACTION CREATER. Creates action (object)
// Action creator gets called in our React Component
export const getItems = () => {
  // Return to the reducer...
  return {
    type: GET_ITEMS
  };
};

// Must send id as a payload to the item reducer
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
