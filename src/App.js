import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addToDo, removeToDo } from "./redux/actions/toDoActions";

const ToDoApp = ({ items, addToDo, removeToDo }) => {
  const [value, setValue] = useState("");
  const handleInputChange = event => setValue(event.target.value);
  const addToDoToList = () => {
    if (value) {
      addToDo(value);
      setValue("");
    }
  };
  const removeToDoFromList = () => {
    removeToDo(item.id);
  };
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      addToDoToList();
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addToDoToList}>ADD TO DO</button>
      <hr />
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={removeToDoFromList}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ items: state.toDoReducer });

const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch(addToDo(text)),
  removeToDo: id => dispatch(addToDo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
