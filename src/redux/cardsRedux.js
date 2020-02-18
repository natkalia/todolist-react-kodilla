import shortid from 'shortid';

// selectors

/* function getCardsForColumn to filter cards so that only 
those with proper id are shown on column
function used in ColumnContainer */
export const getCardsForColumn =
  ({cards}, columnId) => 
    cards.filter(card => card.columnId == columnId);

// action name creator e.g. app/cards/ADD_CARD
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`; 

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = 
  payload => 
    ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}