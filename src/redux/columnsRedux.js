import shortid from 'shortid';

// selectors

/* function getColumnsForList to filter columns so that only 
those with proper id are shown on list
function used in ListContainer */
export const getColumnsForList =
  ({columns}, listId) => 
    columns.filter(column => column.listId == listId);

// action name creator e.g. app/columns/ADD_COLUMN
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`; 

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = 
  payload => 
    ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}