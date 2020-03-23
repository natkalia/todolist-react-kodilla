import shortid from 'shortid';

// selectors

/* select used in ColumnContainer */
export const getCardsForColumn =
  ({cards}, columnId) => 
    cards.filter(card => 
      ((card.columnId == columnId)));

/* selector for search feature */
export const getCardsForSearchResults =
  (cards, searchString) =>
    cards.filter(card => 
      ((new RegExp(searchString, 'i').test(card.title))));

// action name creator e.g. app/cards/ADD_CARD
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`; 

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const DELETE_CARD = createActionName('DELETE_CARD');
export const EDIT_CARD = createActionName('EDIT_CARD');

// action creators
export const createActionAddCard = 
  payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

export const createActionEditCard = 
  payload => ({ payload, type: EDIT_CARD });

export const createActionDeleteCard = 
  payload => ({ payload, type: DELETE_CARD });

// reducer helper functions
const filterCards = (state, cardId) => {
  let newState = [...state];
  newState = newState.filter((element) => 
    element.id !== cardId
  );
  return newState;
};

const editCard = (state, payload) => {
  let newState = [...state];
  newState.forEach((item, index, array) => {
    if (array[index].id === payload.id) {
      array[index] = {...payload};
    }
  });
  return newState;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case DELETE_CARD:
      return filterCards(state, action.payload);
    case EDIT_CARD:
      return editCard(state, action.payload);
    default:
      return state;
  }
}