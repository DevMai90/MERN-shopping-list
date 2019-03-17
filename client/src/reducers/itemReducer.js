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
