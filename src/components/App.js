import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { range } from "../actions";

class App extends Component {
  onDragEnd = result => {
    const { dispatch } = this.props;
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    dispatch(
      range(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={styles.container}>
          <h2>Tableau de bord</h2>
          <div style={styles.listBox}>
            {console.log(lists)}
            {lists.map(list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  container: {
    padding: "1rem"
  },
  listBox: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
