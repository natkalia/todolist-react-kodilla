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
const filterCards = (cards, cardId) => {
  const filteredCards = cards.filter((element) => 
    (element.id !== cardId)
  );
  return filteredCards;
};

const editCards = (cards, payload) => {
  const editedCards = cards.map(element => {
    if (element.id === payload.id) {
      element.title = payload.title;
      return element;
    } else {
      return element;
    }
  });
  return editedCards;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case DELETE_CARD:
      return [...filterCards(state, action.payload)];
    case EDIT_CARD:
      return [...editCards(state, action.payload)];
    default:
      return state;
  }
}