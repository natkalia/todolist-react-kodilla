import shortid from 'shortid';

// selectors - not applicable at the moment

// action name creator e.g. app/lists/ADD_LIST
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`; 

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = 
  payload => 
    ({ payload: { ...payload, id: shortid.generate() }, type: ADD_LIST});

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}