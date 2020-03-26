import React from "react";
import { Card } from "semantic-ui-react";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ description, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
          <Card>
            <Card.Content>
              <Card.Header>Robinson Alain</Card.Header>
              <Card.Meta>Dev React Js</Card.Meta>
              <Card.Description>{description}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
