import React, { Component } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    todo: ""
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  handleInput = e => {
    this.setState({ todo: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { todo } = this.state;
    
    if (todo) {
      this.setState({todo: ""});
      dispatch(addList(todo));
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { todo } = this.state;

    if(todo){
      this.setState({todo:""})
      dispatch(addCard(listID, todo))
    }
  }

  renderAddButton = () => {
    const { list } = this.props;

    const textButton = list
      ? "Ajouter une nouvelle liste"
      : "Ajouter un TODO";

    const textOpacity = list ? 1 : 0.5;
    const textButtonColor = list ? "white" : "inherit";
    const textButtonBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForForm,
          opacity: textOpacity,
          color: textButtonColor,
          backgroundColor: textButtonBackground
        }}
      >
        <Icon name="add" />
        <p>{textButton}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Entrer le titre de votre liste..."
      : "Entrer le titre de votre ToDo...";
    const buttonAction = list ? "Ajouter une liste..." : "Ajouter un ToDo...";

    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.todo}
            onChange={this.handleInput}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButton}>
          <Button
            onMouseDown={list? this.handleAddList : this.handleAddCard}
            style={{ color: "white", backgroundColor: "green" }}
          >
            {buttonAction}
          </Button>
          <Icon
            name="close"
            style={{
              marginLeft: 8,
              cursor: "pointer",
              color: "#ACACAC",
              fontSize: "1.2rem"
            }}
          />
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForForm: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
    marginTop: 8
  },
  formButton: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};
export default connect()(TrelloActionButton);
