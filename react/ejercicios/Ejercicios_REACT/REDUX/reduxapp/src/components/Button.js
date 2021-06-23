import { connect } from "react-redux";

function Button({ handleIncrease }) {
  return <button onClick={handleIncrease}>increase</button>;
}

function mapsDispatchToProps(dispatch) {
  return {
    handleIncrease: (e) => dispatch({ type: "increase" }),
  };
}

export default connect(null, mapsDispatchToProps)(Button);
