import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, listID }) => {
  console.log(cards, "", listID);
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
          <h3>{title}</h3>
          {cards.map((card, index) => (
            <TrelloCard id={card.id} index={index} key={card.id} description={card.text} />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    margin: 8
  }
};

export default TrelloList;
