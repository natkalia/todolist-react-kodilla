import shortid from 'shortid';

// selectors - not applicable at the moment

// action name creator e.g. app/lists/ADD_LIST
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`; 

// action types
export const ADD_LIST = createActionName('ADD_LIST');
export const DELETE_LIST = createActionName('DELETE_LIST');

// action creators
export const createActionAddList = 
  payload => 
    ({ payload: { ...payload, id: shortid.generate() }, type: ADD_LIST});
export const createActionDeleteList = 
  payload => 
    ({payload, type: DELETE_LIST});

// reducer helper functions
const filterLists = (lists, listId) => {
  const filteredLists = lists.filter((element) => 
    (element.id !== listId)
  );
  return filteredLists;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case DELETE_LIST:
      return [...filterLists(state, action.payload)];
    default:
      return state;
  }
}