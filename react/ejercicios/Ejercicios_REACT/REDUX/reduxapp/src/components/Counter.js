import React from "react";
import { connect } from "react-redux";

function Counter({ count }) {
  return <p>{count}</p>;
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
