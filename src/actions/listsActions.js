import { CONSTANTS } from "../actions/index";

export const addList = title =>{
    console.log(title)
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

export const range = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId

) =>{
    return {
        type: CONSTANTS.DRAG_ON,
        payload : {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
        }
    }
}