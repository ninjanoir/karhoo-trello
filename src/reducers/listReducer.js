import { CONSTANTS } from "./../actions/index";

let listID = 4;
let cardID = 4;
const initialState = [
  {
    title: "TODO",
    id: `list-${0}`,
    cards: [
      {
        id:`card-${0}`,
        text: "what's up guys ?"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      console.log("action reçue", action);
      return [...state, newList];
    case CONSTANTS.ADD_CARD: 
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;

      console.log("action reçue", action);

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    

    case CONSTANTS.DRAG_ON:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      
      const nwState = [...state];
      console.log("newState",nwState) 
      // Dans la même liste...
      if (droppableIdStart === droppableIdEnd) {
        console.log("state", state)
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return nwState;

    default:
      return state;
  }
};

export default listReducer;
