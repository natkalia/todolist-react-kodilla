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
export const DELETE_COLUMN = createActionName('DELETE_COLUMN');
export const EDIT_COLUMN = createActionName('EDIT_COLUMN');

// action creators
export const createActionAddColumn = 
  payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

export const createActionDeleteColumn = 
  payload => ({ payload, type: DELETE_COLUMN });

export const createActionEditColumn = 
  payload => ({ payload, type: EDIT_COLUMN });

// reducer helper functions
const filterColumns = (columns, columnId) => {
  const filteredColumns = columns.filter((element) => 
    element.id !== columnId
  );
  return filteredColumns;
};

const editColumns = (columns, payload) => {
  const editedColumns = columns.map(element => {
    if (element.id === payload.id) {
      element.title = payload.title;
      return element;
    } else {
      return element;
    }
  });
  return editedColumns;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    case DELETE_COLUMN:
      return [...filterColumns(state, action.payload)];
    case EDIT_COLUMN:
      return [...editColumns(state, action.payload)];
    default:
      return state;
  }
}