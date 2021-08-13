import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
const Home = ({ toDos, ...rest }) => {
  console.log(rest);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>TO Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write the To Dos"
          value={text}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const getCurrentState = (state, ownProps) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreator.deleteToDo(id)),
  };
};

export default connect(getCurrentState, mapDispatchToProps)(Home);
