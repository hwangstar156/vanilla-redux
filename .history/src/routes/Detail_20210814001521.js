import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return <h1>{toDo}</h1>;
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
