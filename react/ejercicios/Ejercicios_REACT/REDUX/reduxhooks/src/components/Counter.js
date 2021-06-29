import React from "react";
import { connect, useSelector } from "react-redux";

function Counter() {
  const { count } = useSelector((state) => {
    return {
      count: state.count,
    };
  });
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   };
// }

export default Counter;
